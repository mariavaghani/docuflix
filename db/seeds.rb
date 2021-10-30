# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Documentary.destroy_all


doc1 = Documentary.create!(title: "Fantastic Fungi", description: "Fantastic Fungi, directed by Louie Schwartzberg, is a consciousness-shifting film that takes us on an immersive journey through time and scale into the magical earth beneath our feet, an underground network that can heal and save our planet. Through the eyes of renowned scientists and mycologists like Paul Stamets, best-selling authors Michael Pollan, Eugenia Bone, Andrew Weil and others, we become aware of the beauty, intelligence and solutions the fungi kingdom offers us in response to some of our most pressing medical, therapeutic, and environmental challenges.", year: 2019, maturity_rating:"NOT RATED")
name1 = "fantastic-fungi"
doc1_video = open("https://docuflix-seeds.s3.amazonaws.com/videos/#{name1}-trailer-1_a720p.m4v")
doc1_thumb = open("https://docuflix-seeds.s3.amazonaws.com/thumbnails/#{name1}_background_2x.jpeg")
doc1.video.attach(io: doc1_video, filename: "#{name1}-trailer-1_a720p.m4v")
doc1.thumbnail.attach(io: doc1_thumb, filename: "#{name1}_background_2x.jpeg")


doc2 = Documentary.create!(title: "Savior for Sale: Da Vinci’s Lost Masterpiece?", description: "After mysteriously reappearing, the painting titled Salvator Mundi was sold at Christie’s for a record 450 million dollars in 2017. Attributed to Leonardo da Vinci after its discovery, what became the most expensive piece of art ever has unleashed passions while revealing the excesses of our time. But is it really the work of the Italian genius, or one of the greatest scams in the history of art?", year: 2021, maturity_rating:"NOT RATED")
name2 = "savior-for-sale"
doc2_video = open("https://docuflix-seeds.s3.amazonaws.com/videos/#{name2}-trailer-1_a720p.m4v")
doc2_thumb = open("https://docuflix-seeds.s3.amazonaws.com/thumbnails/#{name2}_background_2x.jpeg")
doc2.video.attach(io: doc2_video, filename: "#{name2}-trailer-1_a720p.m4v")
doc2.thumbnail.attach(io: doc2_thumb, filename: "#{name2}_background_2x.jpeg")


doc1 = Documentary.create!(title: "Keyboard Fantasies", description: "Beverly Glenn-Copeland, a Black transgender musician, becomes a cult icon three decades after the release of his album Keyboard Fantasies.", year: 2021, maturity_rating:"NOT RATED")
name3 = "keyboard-fantasies"
doc1_video = open("https://docuflix-seeds.s3.amazonaws.com/videos/#{name3}-trailer-1_a720p.m4v")
doc1_thumb = open("https://docuflix-seeds.s3.amazonaws.com/thumbnails/#{name3}_background_2x.jpeg")
doc1.video.attach(io: doc1_video, filename: "#{name3}-trailer-1_a720p.m4v")
doc1.thumbnail.attach(io: doc1_thumb, filename: "#{name3}_background_2x.jpeg")


puts "All seeded, thank you for asking!"