json.extract! documentary, :id, :title, :description, :year, :maturity_rating 
json.thumbnail url_for(documentary.thumbnail)
json.genre_ids documentary.genres.map{|genre| genre.id} 