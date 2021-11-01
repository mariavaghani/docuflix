
json.extract! genre, :id, :genre
json.documentary_ids genre.documentaries_genres.map{|docu| docu.documentary_id} 

# QUESTION: Does it matter in terms of efficiency if I use
# join table to include the entire documentary object
# or just the linking table