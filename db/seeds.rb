# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
Genre.destroy_all

natureEcology = Genre.create!(genre: "Nature & Ecology")
scienceNature = Genre.create!(genre: "Science & Nature")
biography = Genre.create!(genre: "Biography")
music = Genre.create!(genre: "Music & Musicals")
socialCultural = Genre.create!(genre: "Social & Cultural")


Documentary.destroy_all


doc1 = Documentary.create!(title: "Fantastic Fungi", description: "Fantastic Fungi, directed by Louie Schwartzberg, is a consciousness-shifting film that takes us on an immersive journey through time and scale into the magical earth beneath our feet, an underground network that can heal and save our planet. Through the eyes of renowned scientists and mycologists like Paul Stamets, best-selling authors Michael Pollan, Eugenia Bone, Andrew Weil and others, we become aware of the beauty, intelligence and solutions the fungi kingdom offers us in response to some of our most pressing medical, therapeutic, and environmental challenges.", year: 2019, maturity_rating:"NOT RATED")
name1 = "fantastic-fungi"
doc1_video = open("https://docuflix-seeds.s3.amazonaws.com/videos/#{name1}-trailer-1_a720p.m4v")
doc1_thumb = open("https://docuflix-seeds.s3.amazonaws.com/thumbnails/#{name1}_background_2x.jpeg")
doc1.video.attach(io: doc1_video, filename: "#{name1}-trailer-1_a720p.m4v")
doc1.thumbnail.attach(io: doc1_thumb, filename: "#{name1}_background_2x.jpeg")

d_g2 = DocumentariesGenre.create(documentary_id: doc1.id, genre_id: natureEcology.id)
d_g3 = DocumentariesGenre.create(documentary_id: doc1.id, genre_id: scienceNature.id)


doc2 = Documentary.create!(title: "Savior for Sale: Da Vinci’s Lost Masterpiece?", description: "After mysteriously reappearing, the painting titled Salvator Mundi was sold at Christie’s for a record 450 million dollars in 2017. Attributed to Leonardo da Vinci after its discovery, what became the most expensive piece of art ever has unleashed passions while revealing the excesses of our time. But is it really the work of the Italian genius, or one of the greatest scams in the history of art?", year: 2021, maturity_rating:"NOT RATED")
name2 = "savior-for-sale"
doc2_video = open("https://docuflix-seeds.s3.amazonaws.com/videos/#{name2}-trailer-1_a720p.m4v")
doc2_thumb = open("https://docuflix-seeds.s3.amazonaws.com/thumbnails/#{name2}_background_2x.jpeg")
doc2.video.attach(io: doc2_video, filename: "#{name2}-trailer-1_a720p.m4v")
doc2.thumbnail.attach(io: doc2_thumb, filename: "#{name2}_background_2x.jpeg")

d_g1 = DocumentariesGenre.create(documentary_id: doc2.id, genre_id: socialCultural.id)

doc3 = Documentary.create!(title: "Keyboard Fantasies", description: "Beverly Glenn-Copeland, a Black transgender musician, becomes a cult icon three decades after the release of his album Keyboard Fantasies.", year: 2021, maturity_rating:"NOT RATED")
name3 = "keyboard-fantasies"
doc3_video = open("https://docuflix-seeds.s3.amazonaws.com/videos/#{name3}-trailer-1_a720p.m4v")
doc3_thumb = open("https://docuflix-seeds.s3.amazonaws.com/thumbnails/#{name3}_background_2x.jpeg")
doc3.video.attach(io: doc3_video, filename: "#{name3}-trailer-1_a720p.m4v")
doc3.thumbnail.attach(io: doc3_thumb, filename: "#{name3}_background_2x.jpeg")

d_g4 = DocumentariesGenre.create(documentary_id: doc3.id, genre_id: music.id)
d_g5 = DocumentariesGenre.create(documentary_id: doc3.id, genre_id: socialCultural.id)
d_g5 = DocumentariesGenre.create(documentary_id: doc3.id, genre_id: biography.id)

doc4 = Documentary.create!(title: "All Light, Everywhere", description: "ALL LIGHT, EVERYWHERE is an exploration of the shared histories of cameras, weapons, policing and justice. As surveillance technologies become a fixture in everyday life, the film interrogates the complexity of an objective point of view, probing the biases inherent in both human perception and the lens.", year: 2021, maturity_rating:"NOT RATED")
name4 = "all-light-everywhere"
doc4_video = open("https://docuflix-seeds.s3.amazonaws.com/videos/#{name4}-trailer-1_a720p.m4v")
doc4_thumb = open("https://docuflix-seeds.s3.amazonaws.com/thumbnails/#{name4}_background_2x.jpeg")
doc4.video.attach(io: doc4_video, filename: "#{name4}-trailer-1_a720p.m4v")
doc4.thumbnail.attach(io: doc4_thumb, filename: "#{name4}_background_2x.jpeg")

d_g5 = DocumentariesGenre.create(documentary_id: doc4.id, genre_id: scienceNature.id)

doc5 = Documentary.create!(title: "The Loneliest Whale: The Search for 52", description: "THE LONELIEST WHALE: THE SEARCH FOR 52 is a cinematic quest to find the “52 Hertz Whale,” which scientists believe has spent its entire life in solitude calling out at a frequency that is different from any other whale. As the film embarks on this engrossing journey, audiences will explore what this whale’s lonely plight can teach us — not just about our changing relationship to the oceans, but to each other.", year: 2021, maturity_rating:"PG")
name5 = "the-loneliest-whale"
doc5_video = open("https://docuflix-seeds.s3.amazonaws.com/videos/#{name5}-trailer-1_a720p.m4v")
doc5_thumb = open("https://docuflix-seeds.s3.amazonaws.com/thumbnails/#{name5}_background_2x.jpeg")
doc5.video.attach(io: doc5_video, filename: "#{name5}-trailer-1_a720p.m4v")
doc5.thumbnail.attach(io: doc5_thumb, filename: "#{name5}_background_2x.jpeg")

d_g5 = DocumentariesGenre.create(documentary_id: doc5.id, genre_id: natureEcology.id)
d_g5 = DocumentariesGenre.create(documentary_id: doc5.id, genre_id: scienceNature.id)

User.destroy_all

demoUser = User.create!(email:"demo-user@demo.com", password: "123456")

puts "All seeded, thank you for asking!"