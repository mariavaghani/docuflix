class Api::DocumentariesController < ApplicationController

  def index

    # @documentaries = Documentary.with_attached_thumbnail.all.includes(:genres)
    @documentaries = Documentary
      .joins(:documentaries_genres)
      .where(documentaries_genres: {genre_id: params[:filters].keys})
      .distinct
      .with_attached_thumbnail
    render :index
  end
end
