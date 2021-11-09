# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)

# MINUTE = 60
# HOUR   = MINUTE*60

 
# def sec_to_str(sec)

#   h, rem = sec.round.divmod(HOUR)
#   m, s   = rem.divmod(MINUTE)
#   units  = [ "#{h}h", "#{m}min", "#{s}sec"]
#   units.reject{|str| str.start_with?("0")}.join("")
# end

# # require 'open-uri'
# Genre.destroy_all

# natureEcology = Genre.create!(genre: "Nature & Ecology")
# scienceNature = Genre.create!(genre: "Science & Nature")
# biography = Genre.create!(genre: "Biography")
# music = Genre.create!(genre: "Music & Musicals")
# socialCultural = Genre.create!(genre: "Social & Cultural")


# Documentary.destroy_all


# doc1 = Documentary.create!(title: "Fantastic Fungi",
#   description: "Fantastic Fungi, directed by Louie Schwartzberg, is a consciousness-shifting film that takes us on an immersive journey through time and scale into the magical earth beneath our feet, an underground network that can heal and save our planet. Through the eyes of renowned scientists and mycologists like Paul Stamets, best-selling authors Michael Pollan, Eugenia Bone, Andrew Weil and others, we become aware of the beauty, intelligence and solutions the fungi kingdom offers us in response to some of our most pressing medical, therapeutic, and environmental challenges.",
#   year: 2019,
#   maturity_rating:"NOT RATED",
#   type_media: "movie")
# name1 = "fantastic-fungi"
# doc1_video = open("#{Rails.root}/app/seeds/video_seeds/#{name2}-trailer-1_a720p.m4v")
# doc1_thumb = open("#{Rails.root}/app/seeds/thumbnail_seeds/#{name1}_background_2x.jpeg")
# doc1.video.attach(io: doc1_video, filename: "#{name1}-trailer-1_a720p.m4v")
# doc1.thumbnail.attach(io: doc1_thumb, filename: "#{name1}_background_2x.jpeg")
# doc1.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc1.video.blob).metadata[:duration])
# doc1.save

# d_g2 = DocumentariesGenre.create(documentary_id: doc1.id, genre_id: natureEcology.id)
# d_g3 = DocumentariesGenre.create(documentary_id: doc1.id, genre_id: scienceNature.id)


# doc2 = Documentary.create!(title: "Savior for Sale: Da Vinci’s Lost Masterpiece?",
#   description: "After mysteriously reappearing, the painting titled Salvator Mundi was sold at Christie’s for a record 450 million dollars in 2017. Attributed to Leonardo da Vinci after its discovery, what became the most expensive piece of art ever has unleashed passions while revealing the excesses of our time. But is it really the work of the Italian genius, or one of the greatest scams in the history of art?",
#   year: 2021,
#   maturity_rating:"NOT RATED",
#   type_media: "movie")
# name2 = "savior-for-sale"
# doc2_video = open("#{Rails.root}/app/seeds/video_seeds/#{name2}-trailer-1_a720p.m4v")
# doc2_thumb = open("#{Rails.root}/app/seeds/thumbnail_seeds/#{name2}_background_2x.jpeg")
# doc2.video.attach(io: doc2_video, filename: "#{name2}-trailer-1_a720p.m4v")
# doc2.thumbnail.attach(io: doc2_thumb, filename: "#{name2}_background_2x.jpeg")
# doc2.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc2.video.blob).metadata[:duration])
# doc2.save

# d_g1 = DocumentariesGenre.create(documentary_id: doc2.id, genre_id: socialCultural.id)

# doc3 = Documentary.create!(title: "Keyboard Fantasies",
#   description: "Beverly Glenn-Copeland, a Black transgender musician, becomes a cult icon three decades after the release of his album Keyboard Fantasies.",
#   year: 2021,
#   maturity_rating:"NOT RATED",
#   type_media: "movie")
# name3 = "keyboard-fantasies"
# doc3_video = open("#{Rails.root}/app/seeds/video_seeds/#{name3}-trailer-1_a720p.m4v")
# doc3_thumb = open("#{Rails.root}/app/seeds/thumbnail_seeds/#{name3}_background_2x.jpeg")
# doc3.video.attach(io: doc3_video, filename: "#{name3}-trailer-1_a720p.m4v")
# doc3.thumbnail.attach(io: doc3_thumb, filename: "#{name3}_background_2x.jpeg")
# doc3.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc3.video.blob).metadata[:duration])
# doc3.save

# d_g4 = DocumentariesGenre.create(documentary_id: doc3.id, genre_id: music.id)
# d_g5 = DocumentariesGenre.create(documentary_id: doc3.id, genre_id: socialCultural.id)
# d_g5 = DocumentariesGenre.create(documentary_id: doc3.id, genre_id: biography.id)

# doc4 = Documentary.create!(title: "All Light, Everywhere",
#   description: "ALL LIGHT, EVERYWHERE is an exploration of the shared histories of cameras, weapons, policing and justice. As surveillance technologies become a fixture in everyday life, the film interrogates the complexity of an objective point of view, probing the biases inherent in both human perception and the lens.",
#   year: 2021,
#   maturity_rating:"NOT RATED",
#   type_media: "movie")
# name4 = "all-light-everywhere"
# doc4_video = open("#{Rails.root}/app/seeds/video_seeds/#{name4}-trailer-1_a720p.m4v")
# doc4_thumb = open("#{Rails.root}/app/seeds/thumbnail_seeds/#{name4}_background_2x.jpeg")
# doc4.video.attach(io: doc4_video, filename: "#{name4}-trailer-1_a720p.m4v")
# doc4.thumbnail.attach(io: doc4_thumb, filename: "#{name4}_background_2x.jpeg")
# doc4.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc4.video.blob).metadata[:duration])
# doc4.save

# d_g5 = DocumentariesGenre.create(documentary_id: doc4.id, genre_id: scienceNature.id)

# doc5 = Documentary.create!(title: "The Loneliest Whale: The Search for 52",
#   description: "THE LONELIEST WHALE: THE SEARCH FOR 52 is a cinematic quest to find the “52 Hertz Whale,” which scientists believe has spent its entire life in solitude calling out at a frequency that is different from any other whale. As the film embarks on this engrossing journey, audiences will explore what this whale’s lonely plight can teach us — not just about our changing relationship to the oceans, but to each other.",
#   year: 2021,
#   maturity_rating:"PG",
#   type_media: "movie")
# name5 = "the-loneliest-whale"
# doc5_video = open("#{Rails.root}/app/seeds/video_seeds/#{name5}-trailer-1_a720p.m4v")
# doc5_thumb = open("#{Rails.root}/app/seeds/thumbnail_seeds/#{name5}_background_2x.jpeg")
# doc5.video.attach(io: doc5_video, filename: "#{name5}-trailer-1_a720p.m4v")
# doc5.thumbnail.attach(io: doc5_thumb, filename: "#{name5}_background_2x.jpeg")
# doc5.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc5.video.blob).metadata[:duration])
# doc5.save

# d_g5 = DocumentariesGenre.create(documentary_id: doc5.id, genre_id: natureEcology.id)
# d_g5 = DocumentariesGenre.create(documentary_id: doc5.id, genre_id: scienceNature.id)


# doc6 = Documentary.create!(title: "The Alpinist",
#   description: "Marc-André Leclerc climbs alone, far from the limelight. On remote alpine faces, the free-spirited 23-year-old Canadian makes some of the boldest solo ascents in history. Yet, he draws scant attention. With no cameras, no rope, and no margin for error, Leclerc's approach is the essence of solo adventure. Nomadic and publicity shy, he doesn’t own a phone or car, and is reluctant to let a film crew in on his pure vision of climbing. Veteran filmmaker Peter Mortimer (THE DAWN WALL) sets out to make a film about Leclerc but struggles to keep up with his elusive subject. Then, Leclerc embarks on a historic adventure in Patagonia that will redefine what is possible in solo climbing.",
#   year: 2021,
#   maturity_rating:"PG-13",
#   type_media: "movie")
# name6 = "the-alpinist"
# doc6_video = open("#{Rails.root}/app/seeds/video_seeds/#{name6}-trailer-1_a720p.m4v")
# doc6_thumb = open("#{Rails.root}/app/seeds/thumbnail_seeds/#{name6}_background_2x.jpeg")
# doc6.video.attach(io: doc6_video, filename: "#{name6}-trailer-1_a720p.m4v")
# doc6.thumbnail.attach(io: doc6_thumb, filename: "#{name6}_background_2x.jpeg")
# doc6.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc6.video.blob).metadata[:duration])
# doc6.save

# d_g6 = DocumentariesGenre.create(documentary_id: doc6.id, genre_id: natureEcology.id)
# d_g6 = DocumentariesGenre.create(documentary_id: doc6.id, genre_id: biography.id)

# User.destroy_all

# Profile.destroy_all

# demoUser = User.create!(email:"demo-user@demo.com", password: "123456")
# demoUser_guest = Profile.create!(user_id: demoUser.id, profile_name: "Guest", maturity_setting: "NC-17", autoplay_next_episode: true, autoplay_preview: true)
# guest_avatar = open("#{Rails.root}/app/assets/images/profile4.png")
# demoUser_guest.avatar.attach(io: guest_avatar, filename: "profile4.png")

# demoUser_kids = Profile.create!(user_id: demoUser.id, profile_name: "Kids", maturity_setting: "PG", autoplay_next_episode: true, autoplay_preview: true)
# kids_avatar = open("#{Rails.root}/app/assets/images/profile_kids.png")
# demoUser_kids.avatar.attach(io: kids_avatar, filename: "profile_kids.png")

# puts "Development All seeded, thank you for asking!"