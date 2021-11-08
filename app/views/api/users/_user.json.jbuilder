json.extract! user, :id, :email
json.profile_ids user.profiles.map{|profile| profile.id} 
