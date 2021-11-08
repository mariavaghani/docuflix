class Api::ProfilesController < ApplicationController
  def index
    @profiles = Profile
      .where(user_id: params[:user_id])
    render :index
  end

  def show

    @profile = Profile.find(params[:id])

    render :show
  end

  def create
    require 'open-uri'
    @profile = Profile.new(profile_params)
    @profile.user_id = params[:profile][:user_id]
    user = User.find(params[:profile][:user_id])
    if user.profiles.length > 4
      render json: ["Already have maximum number of profiles on your account"], status: 422
    elsif @profile.save
      new_avatar = open(params[:profile][:avatar])
      @profile.avatar.attach(io: new_avatar, filename: params[:profile][:avatar].split("/").last)

      render :show
    else
      render json: @profile.errors.full_messages, status: 422
    end
  end

  def update
    require 'open-uri'
    @profile = Profile.find(params[:profile][:id])


    if @profile.update(profile_params)
      if params[:profile][:avatar_modified] == "true"
        new_avatar = open(params[:profile][:avatar])
        @profile.avatar.attach(io: new_avatar, filename: params[:profile][:avatar].split("/").last)
        
      end

      render :show
    else
      render json: @profile.errors.full_messages, status: 422
    end
  end

  def destroy
    @profile = Profile.find(params[:id])
    if @profile.user_profiles.length > 1
      @profile.destroy
      render json: {}
    else
      render json: ["Can't delete the last profile"], status: 404
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:profile_name, :maturity_setting, :autoplay_next_episode, :autoplay_preview)
  end
end
