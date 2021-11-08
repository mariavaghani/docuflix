@profiles.each do |profile|
  json.set! profile.id do
    json.extract! profile, :id, :profile_name 
    json.avatar url_for(profile.avatar)
  end
end