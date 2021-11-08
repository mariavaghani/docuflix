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

  def update
    @profile = Profile.find(params[:profile][:id])


    if @profile.update(profile_params)
      render :show
    else
      render json: @profile.errors.full_messages, status: 422
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:profile_name, :maturity_setting, :autoplay_next_episode, :autoplay_preview)
  end
end
