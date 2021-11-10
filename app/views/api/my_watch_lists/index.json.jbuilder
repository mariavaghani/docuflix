@watch_lists.each do |watch_list|
  json.set! watch_list.id do
    json.extract! watch_list, :id, :documentary_id, :profile_id 
  end
end