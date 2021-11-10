class Api::MyWatchListsController < ApplicationController

  def index
    @watch_lists = MyWatchList
      .where(profile_id: params[:profile_id])
    render :index
  end

  def create
    @watch_list = MyWatchList.new(watch_list_params)

    if @watch_list.save
      render :show
    else
      render json: @watch_list.errors.full_messages, status: 422
    end
  end

  def destroy
    @watch_list = MyWatchList.find(params[:id])
    if @watch_list.destroy
      render json: {}
    else
      render json: ["Could not remove the documentary from watch list for some reason"], status: 404
    end
  end

  private

  def watch_list_params
    params.require(:watch_list).permit(:documentary_id, :profile_id)
  end
end
