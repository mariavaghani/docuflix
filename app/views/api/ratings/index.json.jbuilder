@ratings.each do |rating|
  json.set! rating.id do
    json.extract! rating, :id, :documentary_id, :profile_id, :rating_value
  end
end