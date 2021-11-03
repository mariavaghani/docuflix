class Api::DocumentariesController < ApplicationController

  def index

    # @documentaries = Documentary.with_attached_thumbnail.all.includes(:genres)
    @documentaries = Documentary
      .with_attached_thumbnail
      .joins(:documentaries_genres)
      .includes(:documentaries_genres)
      .where(documentaries_genres: {genre_id: params[:filters].keys})
      .distinct
    render :index
  end

  def show
    @documentary = Documentary.find(params[:id])
    render :show
  end
end
