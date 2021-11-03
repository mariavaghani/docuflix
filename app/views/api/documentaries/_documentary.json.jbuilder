json.extract! documentary, :id 
json.thumbnail url_for(documentary.thumbnail)
json.genre_ids documentary.documentaries_genres.map{|docu_genre| docu_genre.genre_id} 