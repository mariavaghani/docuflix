class Api::UsersController < ApplicationController
  # before_action :ensure_logged_in, only: [:index]
  # before_action :ensure_logged_out, only: [:create]
  
  
  def create
    @user = User.new(user_params)
  
    if @user.save
      login!(@user)
      @user_kids = Profile.create!(user_id: @user.id, profile_name: "Kids", maturity_setting: "PG", autoplay_next_episode: true, autoplay_preview: true)
      kids_avatar = open("https://docuflix-seeds-pro.s3.amazonaws.com/ui_images/profile_kids.png")
      @user_kids.avatar.attach(io: kids_avatar, filename: "profile_kids.png")
      
      @user_guest = Profile.create!(user_id: @user.id, profile_name: "Guest", maturity_setting: "NC-17", autoplay_next_episode: true, autoplay_preview: true)
      guest_avatar = open("https://docuflix-seeds-pro.s3.amazonaws.com/ui_images/profile4.png")
      @user_guest.avatar.attach(io: guest_avatar, filename: "profile4.png")
      


      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  
  end

  def update
    @user = User.find(params[:user][:id])

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  
  private
  
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
