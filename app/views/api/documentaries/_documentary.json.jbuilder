json.extract! documentary, :id
json.thumbnail url_for(documentary.thumbnail)
json.genre_ids documentary.genres.map { |genre| genre.id }
documentary.genres.map do |genre| 
  @genres_in_collection.push(genre.id)
end