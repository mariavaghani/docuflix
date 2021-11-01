class Api::GenresController < ApplicationController
  def index
    @genres = Genre.all.includes(:documentaries_genres)
    puts "GENRES TO BE RETURNED HERE"
    puts @genres
    puts "GENRES ^^"
    # QUESTION: show i use documentaries_genres or documentary association?
    render :index
  end

  def show
    
  end
end
