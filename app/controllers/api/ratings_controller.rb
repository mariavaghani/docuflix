class Api::RatingsController < ApplicationController

  def create
    @rating = Rating.new(rating_params)

    if @rating.save
      render :show
    else
      render json: @rating.errors.full_messages, status: 422
    end
  end

  def destroy
    @rating = Rating.find(params[:id])
    if @rating.destroy
      render json: {}
    else
      render json: ["How bizzare, could not destroy this rating"], status: 404
    end
  end

  def index
    @ratings = Rating
      .includes(:documentary)
      .where(profile_id: params[:profile_id])
    render :index
  end

  def update
    @rating = Rating.find(params[:rating][:id])


    if @rating.update(rating_params)
      
      render :show
    else
      render json: @rating.errors.full_messages, status: 422
    end
  end

  private

  def rating_params
    params.require(:rating).permit(:documentary_id, :profile_id, :rating_value)
  end
end
