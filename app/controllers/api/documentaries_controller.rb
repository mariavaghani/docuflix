class Api::DocumentariesController < ApplicationController

  def index
    @documentaries = Documentary.all
    render :index
  end
end
