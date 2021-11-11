class Api::DocumentariesController < ApplicationController

  def index

    if params[:filters][:titleQuery] != ""
      query = params[:filters][:titleQuery]
      @documentaries = Documentary
        .with_attached_thumbnail
        .joins(:genres)
        .includes(:genres)
        .where('title ILIKE ?',"%#{query}%")
        .distinct
    else
      @documentaries = Documentary
      .with_attached_thumbnail
      .joins(:genres)
      .includes(:genres)
    end
    
    
    render :index
  end

  def show
    @documentary = Documentary.find(params[:id])
    render :show
  end
end
