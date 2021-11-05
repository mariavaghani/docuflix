class Api::GenresController < ApplicationController
  def index
    @genres = Genre.includes(:documentaries_genres).all
    puts "GENRES TO BE RETURNED HERE"
    puts @genres
    puts "GENRES ^^"
    render :index
  end

  def show
    
  end
end
