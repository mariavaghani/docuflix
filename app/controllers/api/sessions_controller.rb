class Api::SessionsController < ApplicationController
  before_action :ensure_logged_out, only: [:create]
  before_action :ensure_logged_in, only: [:destroy]
  
  
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
  
    if @user.nil?
      render json: ['Nope. Wrong credentials!'], status: 401
    else
      login!(@user)
      render 'api/users/show'
    end
  end
  
  def destroy
    if logged_in?
      logout!
      render json: {}
    else
      render json: ["Can't log out when not logged in"], status: 404
    end
  end
end
