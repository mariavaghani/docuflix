
json.extract! genre, :id, :genre
json.documentary_ids genre.documentaries_genres.map{|docu| docu.documentary_id} 
