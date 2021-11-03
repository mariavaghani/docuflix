json.extract! @documentary, :id, :title, :description, :year, :maturity_rating, :type_media, :runtime_size 
json.thumbnail url_for(@documentary.thumbnail)
json.video url_for(@documentary.video)
json.genre_ids @documentary.documentaries_genres.map{|docu_genre| docu_genre.genre_id} 