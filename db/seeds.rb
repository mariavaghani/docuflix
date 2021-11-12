# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

production_path_video = "https://docuflix-seeds-pro.s3.amazonaws.com/videos/"
production_path_thumbnail = "https://docuflix-seeds-pro.s3.amazonaws.com/thumbnails/"

# dev_path_video = "#{Rails.root}/app/assets/seeds/video_seeds/"
# dev_path_thumbnail = "#{Rails.root}/app/assets/seeds/thumbnail_seeds/"


# curr_path_video = production_path_video
# curr_path_thumbnail = production_path_thumbnail

curr_path_video = dev_path_video
curr_path_thumbnail = dev_path_thumbnail

MINUTE = 60
HOUR   = MINUTE*60

 
def sec_to_str(sec)

  h, rem = sec.round.divmod(HOUR)
  m, s   = rem.divmod(MINUTE)
  units  = [ "#{h}h", "#{m}min", "#{s}sec"]
  units.reject{|str| str.start_with?("0")}.join("")
end

require 'open-uri'
Genre.destroy_all

natureEcology = Genre.create!(genre: "Nature & Ecology")
scienceNature = Genre.create!(genre: "Science & Nature")
biography = Genre.create!(genre: "Biography")
music = Genre.create!(genre: "Music & Musicals")
socialCultural = Genre.create!(genre: "Social & Cultural")


Documentary.destroy_all


doc1 = Documentary.create!(title: "Fantastic Fungi",
  description: "Fantastic Fungi, directed by Louie Schwartzberg, is a consciousness-shifting film that takes us on an immersive journey through time and scale into the magical earth beneath our feet, an underground network that can heal and save our planet. Through the eyes of renowned scientists and mycologists like Paul Stamets, best-selling authors Michael Pollan, Eugenia Bone, Andrew Weil and others, we become aware of the beauty, intelligence and solutions the fungi kingdom offers us in response to some of our most pressing medical, therapeutic, and environmental challenges.",
  year: 2019,
  maturity_rating:"NOT RATED",
  type_media: "movie")
name1 = "fantastic-fungi"
doc1_video = open( curr_path_video + "#{name1}-trailer-1_a720p.m4v")
doc1_thumb = open( curr_path_thumbnail + "#{name1}_background_2x.jpeg")
doc1.video.attach(io: doc1_video, filename: "#{name1}-trailer-1_a720p.m4v")
doc1.thumbnail.attach(io: doc1_thumb, filename: "#{name1}_background_2x.jpeg")
doc1.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc1.video.blob).metadata[:duration])
doc1.save

d_g2 = DocumentariesGenre.create(documentary_id: doc1.id, genre_id: natureEcology.id)
d_g3 = DocumentariesGenre.create(documentary_id: doc1.id, genre_id: scienceNature.id)


doc2 = Documentary.create!(title: "Savior for Sale: Da Vinci’s Lost Masterpiece?",
  description: "After mysteriously reappearing, the painting titled Salvator Mundi was sold at Christie’s for a record 450 million dollars in 2017. Attributed to Leonardo da Vinci after its discovery, what became the most expensive piece of art ever has unleashed passions while revealing the excesses of our time. But is it really the work of the Italian genius, or one of the greatest scams in the history of art?",
  year: 2021,
  maturity_rating:"NOT RATED",
  type_media: "movie")
name2 = "savior-for-sale"
doc2_video = open( curr_path_video + "#{name2}-trailer-1_a720p.m4v")
doc2_thumb = open( curr_path_thumbnail + "#{name2}_background_2x.jpeg")
doc2.video.attach(io: doc2_video, filename: "#{name2}-trailer-1_a720p.m4v")
doc2.thumbnail.attach(io: doc2_thumb, filename: "#{name2}_background_2x.jpeg")
doc2.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc2.video.blob).metadata[:duration])
doc2.save

d_g1 = DocumentariesGenre.create(documentary_id: doc2.id, genre_id: socialCultural.id)

doc3 = Documentary.create!(title: "Keyboard Fantasies",
  description: "Beverly Glenn-Copeland, a Black transgender musician, becomes a cult icon three decades after the release of his album Keyboard Fantasies.",
  year: 2021,
  maturity_rating:"NOT RATED",
  type_media: "movie")
name3 = "keyboard-fantasies"
doc3_video = open( curr_path_video + "#{name3}-trailer-1_a720p.m4v")
doc3_thumb = open( curr_path_thumbnail + "#{name3}_background_2x.jpeg")
doc3.video.attach(io: doc3_video, filename: "#{name3}-trailer-1_a720p.m4v")
doc3.thumbnail.attach(io: doc3_thumb, filename: "#{name3}_background_2x.jpeg")
doc3.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc3.video.blob).metadata[:duration])
doc3.save

d_g4 = DocumentariesGenre.create(documentary_id: doc3.id, genre_id: music.id)
d_g5 = DocumentariesGenre.create(documentary_id: doc3.id, genre_id: socialCultural.id)
d_g5 = DocumentariesGenre.create(documentary_id: doc3.id, genre_id: biography.id)

doc4 = Documentary.create!(title: "All Light, Everywhere",
  description: "ALL LIGHT, EVERYWHERE is an exploration of the shared histories of cameras, weapons, policing and justice. As surveillance technologies become a fixture in everyday life, the film interrogates the complexity of an objective point of view, probing the biases inherent in both human perception and the lens.",
  year: 2021,
  maturity_rating:"NOT RATED",
  type_media: "movie")
name4 = "all-light-everywhere"
doc4_video = open( curr_path_video + "#{name4}-trailer-1_a720p.m4v")
doc4_thumb = open( curr_path_thumbnail + "#{name4}_background_2x.jpeg")
doc4.video.attach(io: doc4_video, filename: "#{name4}-trailer-1_a720p.m4v")
doc4.thumbnail.attach(io: doc4_thumb, filename: "#{name4}_background_2x.jpeg")
doc4.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc4.video.blob).metadata[:duration])
doc4.save

d_g5 = DocumentariesGenre.create(documentary_id: doc4.id, genre_id: scienceNature.id)

doc5 = Documentary.create!(title: "The Loneliest Whale: The Search for 52",
  description: "THE LONELIEST WHALE: THE SEARCH FOR 52 is a cinematic quest to find the “52 Hertz Whale,” which scientists believe has spent its entire life in solitude calling out at a frequency that is different from any other whale. As the film embarks on this engrossing journey, audiences will explore what this whale’s lonely plight can teach us — not just about our changing relationship to the oceans, but to each other.",
  year: 2021,
  maturity_rating:"PG",
  type_media: "movie")
name5 = "the-loneliest-whale"
doc5_video = open( curr_path_video + "#{name5}-trailer-1_a720p.m4v")
doc5_thumb = open( curr_path_thumbnail + "#{name5}_background_2x.jpeg")
doc5.video.attach(io: doc5_video, filename: "#{name5}-trailer-1_a720p.m4v")
doc5.thumbnail.attach(io: doc5_thumb, filename: "#{name5}_background_2x.jpeg")
doc5.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc5.video.blob).metadata[:duration])
doc5.save

d_g5 = DocumentariesGenre.create(documentary_id: doc5.id, genre_id: natureEcology.id)
d_g5 = DocumentariesGenre.create(documentary_id: doc5.id, genre_id: scienceNature.id)

doc6 = Documentary.create!(title: "The Alpinist",
  description: "Marc-André Leclerc climbs alone, far from the limelight. On remote alpine faces, the free-spirited 23-year-old Canadian makes some of the boldest solo ascents in history. Yet, he draws scant attention. With no cameras, no rope, and no margin for error, Leclerc's approach is the essence of solo adventure. Nomadic and publicity shy, he doesn’t own a phone or car, and is reluctant to let a film crew in on his pure vision of climbing. Veteran filmmaker Peter Mortimer (THE DAWN WALL) sets out to make a film about Leclerc but struggles to keep up with his elusive subject. Then, Leclerc embarks on a historic adventure in Patagonia that will redefine what is possible in solo climbing.",
  year: 2021,
  maturity_rating:"PG-13",
  type_media: "movie")
name6 = "the-alpinist"
doc6_video = open( curr_path_video + "#{name6}-trailer-1_a720p.m4v")
doc6_thumb = open( curr_path_thumbnail + "#{name6}_background_2x.jpeg")
doc6.video.attach(io: doc6_video, filename: "#{name6}-trailer-1_a720p.m4v")
doc6.thumbnail.attach(io: doc6_thumb, filename: "#{name6}_background_2x.jpeg")
doc6.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc6.video.blob).metadata[:duration])
doc6.save

d_g6 = DocumentariesGenre.create(documentary_id: doc6.id, genre_id: natureEcology.id)
d_g6 = DocumentariesGenre.create(documentary_id: doc6.id, genre_id: biography.id)

doc7 = Documentary.create!(title: "The Sparks Brothers",
  description: "How can one rock band be successful, underrated, hugely influential, and criminally overlooked all at the same time? Edgar Wright’s debut documentary THE SPARKS BROTHERS, which features commentary from celebrity fans Flea, Jane Wiedlin, Beck, Jack Antonoff, Jason Schwartzman, Neil Gaiman, and more, takes audiences on a musical odyssey through five weird and wonderful decades with brothers/bandmates Ron and Russell Mael celebrating the inspiring legacy of Sparks: your favorite band’s favorite band.",
  year: 2021,
  maturity_rating:"R",
  type_media: "movie")
name7 = "the-sparks-brothers"
doc7_video = open( curr_path_video + "#{name7}-trailer-1_a720p.m4v")
doc7_thumb = open( curr_path_thumbnail + "#{name7}_background_2x.jpeg")
doc7.video.attach(io: doc7_video, filename: "#{name7}-trailer-1_a720p.m4v")
doc7.thumbnail.attach(io: doc7_thumb, filename: "#{name7}_background_2x.jpeg")
doc7.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc7.video.blob).metadata[:duration])
doc7.save

d_g7 = DocumentariesGenre.create(documentary_id: doc7.id, genre_id: music.id)
d_g7 = DocumentariesGenre.create(documentary_id: doc7.id, genre_id: biography.id)
d_g7 = DocumentariesGenre.create(documentary_id: doc7.id, genre_id: socialCultural.id)

doc8 = Documentary.create!(title: "Moby Doc",
  description: "Moby Doc is a surrealist biographical documentary narrated by Moby as he reflects on his turbulent personal life and iconic music from underground punk bands to chart-topping solo artist, and from struggling addict to vegan activist. Featuring interviews with David Lynch and David Bowie, along with extraordinary concert footage, utilizing a unique blend of re-enactments, interviews, and archival footage, audiences will be treated to an insightful, unvarnished look at an artist who has sold more than 20 million albums, an activist who has long championed animal rights, and a man whose traumatic childhood shaped him in profound ways. This introspective journey sets out to answer existential questions of purpose and meaning by examining a life of extreme highs and lows, joy, tragedy, success and failure.",
  year: 2021,
  maturity_rating:"NOT RATED",
  type_media: "movie")
name8 = "moby-doc"
doc8_video = open( curr_path_video + "#{name8}-trailer-1_a720p.m4v")
doc8_thumb = open( curr_path_thumbnail + "#{name8}_background_2x.jpeg")
doc8.video.attach(io: doc8_video, filename: "#{name8}-trailer-1_a720p.m4v")
doc8.thumbnail.attach(io: doc8_thumb, filename: "#{name8}_background_2x.jpeg")
doc8.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc8.video.blob).metadata[:duration])
doc8.save

d_g8 = DocumentariesGenre.create(documentary_id: doc8.id, genre_id: music.id)
d_g8 = DocumentariesGenre.create(documentary_id: doc8.id, genre_id: biography.id)
d_g8 = DocumentariesGenre.create(documentary_id: doc8.id, genre_id: socialCultural.id)

doc9 = Documentary.create!(title: "Woman in Motion",
  description: "Woman in Motion is the inspiring true story of how renowned Star Trek actress Nichelle Nichols pioneered the NASA recruiting program to hire people of color and the first female astronauts for the space agency in the late 1970s and 1980s. In addition to Nichols, Woman in Motion features notable celebrities, activists, scientists and astronauts including Neil deGrasse Tyson, George Takei, Pharrell Williams, Martin Luther King III, Al Sharpton, Vivica A. Fox, Walter Koenig, Rod Roddenberry, Michael Dorn, Guy Bluford, Charles Bolden, Ivor Dawson, Frederik Gregory and Benjamin Crump.",
  year: 2021,
  maturity_rating:"NOT RATED",
  type_media: "movie")
name9 = "woman-in-motion"
doc9_video = open( curr_path_video + "#{name9}-trailer-1_a720p.m4v")
doc9_thumb = open( curr_path_thumbnail + "#{name9}_background_2x.jpeg")
doc9.video.attach(io: doc9_video, filename: "#{name9}-trailer-1_a720p.m4v")
doc9.thumbnail.attach(io: doc9_thumb, filename: "#{name9}_background_2x.jpeg")
doc9.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc9.video.blob).metadata[:duration])
doc9.save

d_g9 = DocumentariesGenre.create(documentary_id: doc9.id, genre_id: biography.id)
d_g9 = DocumentariesGenre.create(documentary_id: doc9.id, genre_id: socialCultural.id)


doc10 = Documentary.create!(title: "The Reason I Jump",
  description: "Based on the best-selling book by Naoki Higashida, The Reason I Jump is an immersive cinematic exploration of neurodiversity through the experiences of nonspeaking autistic people from around the world. The film blends Higashida's revelatory insights into autism, written when he was just 13, with intimate portraits of five remarkable young people. It opens a window for audiences into an intense and overwhelming, but often joyful, sensory universe. Moments in the lives of each of the characters are linked by the journey of a young Japanese boy through an epic landscape; narrated passages from Naoki’s writing reflect on what his autism means to him and others, how his perception of the world differs, and why he acts in the way he does: the reason he jumps. The film distils these elements into a sensually rich tapestry that leads us to Naoki’s core message: not being able to speak does not mean there is nothing to say.",
  year: 2021,
  maturity_rating:"NOT RATED",
  type_media: "movie")
name10 = "the-reason-i-jump"
doc10_video = open( curr_path_video + "#{name10}-trailer-1_a720p.m4v")
doc10_thumb = open( curr_path_thumbnail + "#{name10}_background_2x.jpeg")
doc10.video.attach(io: doc10_video, filename: "#{name10}-trailer-1_a720p.m4v")
doc10.thumbnail.attach(io: doc10_thumb, filename: "#{name10}_background_2x.jpeg")
doc10.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc10.video.blob).metadata[:duration])
doc10.save

d_g10 = DocumentariesGenre.create(documentary_id: doc10.id, genre_id: biography.id)
d_g10 = DocumentariesGenre.create(documentary_id: doc10.id, genre_id: socialCultural.id)


doc11 = Documentary.create!(title: "Queer Japan",
  description: "Trailblazing artists, activists, and everyday people from across the spectrum of gender and sexuality defy social norms and dare to shine in this kaleidoscopic view of LGBTQ+ culture in contemporary Japan. From glossy pride parades to playfully perverse underground parties, Queer Japan pictures people living brazenly unconventional lives in the sunlight, the shadows, and everywhere in between. Featuring: Vivienne Sato, Gengoroh Tagame, Atsushi Matsuda, Nogi Sumiko, Hiroshi Hasegawa, Akira the Hustler & Tomato Hatakeno.",
  year: 2020,
  maturity_rating:"NOT RATED",
  type_media: "movie")
name11 = "queer-japan"
doc11_video = open( curr_path_video + "#{name11}-trailer-1_a720p.m4v")
doc11_thumb = open( curr_path_thumbnail + "#{name11}_background_2x.jpeg")
doc11.video.attach(io: doc11_video, filename: "#{name11}-trailer-1_a720p.m4v")
doc11.thumbnail.attach(io: doc11_thumb, filename: "#{name11}_background_2x.jpeg")
doc11.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc11.video.blob).metadata[:duration])
doc11.save

d_g11 = DocumentariesGenre.create(documentary_id: doc11.id, genre_id: socialCultural.id)


doc12 = Documentary.create!(title: "Assassins",
  description: "The audacious murder of Kim Jong-un's brother in a crowded Malaysian airport sparked a worldwide media frenzy. At the center of the investigation are two young women who are either cold-blooded killers or unwitting pawns in a political assassination. ASSASSINS goes beyond the headlines to question every angle of this case, from human trafficking to geo-political espionage to the secretive dynamics of the North Korean dynasty.",
  year: 2020,
  maturity_rating:"NOT RATED",
  type_media: "movie")
name12 = "assassins"
doc12_video = open( curr_path_video + "#{name12}-trailer-1_a720p.m4v")
doc12_thumb = open( curr_path_thumbnail + "#{name12}_background_2x.jpeg")
doc12.video.attach(io: doc12_video, filename: "#{name12}-trailer-1_a720p.m4v")
doc12.thumbnail.attach(io: doc12_thumb, filename: "#{name12}_background_2x.jpeg")
doc12.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc12.video.blob).metadata[:duration])
doc12.save

d_g12 = DocumentariesGenre.create(documentary_id: doc12.id, genre_id: socialCultural.id)

doc13 = Documentary.create!(title: "Totally Under Control",
  description: "On January 20th, 2020 the US and South Korea both discovered their first cases of COVID-19. However, 9 months later, the novel Coronavirus has claimed the lives of almost 200,000 Americans and caused staggering economic damage, while in South Korea, there were no significant lockdowns and, in an urbanized population of 51 million, only 344 lives have been lost. Where did we go wrong? As the presidential election nears, Americans are increasingly enraged by a lack of clear leadership, endemic political corruption and left to wonder how did the wealthiest and most powerful country in the world manage to fail so thoroughly in its response to a global pandemic?

Academy Award-winning filmmaker Alex Gibney, directing with Ophelia Harutyunyan and Suzanne Hillinger, interrogates this question and its devastating implications in Totally Under Control. With damning testimony from public health officials and hard investigative reporting, Gibney exposes a system-wide collapse caused by a profound dereliction of Presidential leadership.


It will be a generation before we know the full extent of the damage wrought by this pandemic, but Totally Under Control will stand as the definitive account of the Trump administration’s incompetence, corruption and denial in the face of this global pandemic.",
  year: 2020,
  maturity_rating:"NOT RATED",
  type_media: "movie")
name13 = "totally-under-control"
doc13_video = open( curr_path_video + "#{name13}-trailer-1_a720p.m4v")
doc13_thumb = open( curr_path_thumbnail + "#{name13}_background_2x.jpeg")
doc13.video.attach(io: doc13_video, filename: "#{name13}-trailer-1_a720p.m4v")
doc13.thumbnail.attach(io: doc13_thumb, filename: "#{name13}_background_2x.jpeg")
doc13.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc13.video.blob).metadata[:duration])
doc13.save

d_g13 = DocumentariesGenre.create(documentary_id: doc13.id, genre_id: socialCultural.id)


doc14 = Documentary.create!(title: "Robin's Wish",
  description: "Robin's Wish is the final word in the story of what really happened to Robin Williams at the end of his life, it reveals the beauty and power behind the mind of one of the greatest entertainers of all time.",
  year: 2020,
  maturity_rating:"NOT RATED",
  type_media: "movie")
name14 = "robins-wish"
doc14_video = open( curr_path_video + "#{name14}-trailer-1_a720p.m4v")
doc14_thumb = open( curr_path_thumbnail + "#{name14}_background_2x.jpeg")
doc14.video.attach(io: doc14_video, filename: "#{name14}-trailer-1_a720p.m4v")
doc14.thumbnail.attach(io: doc14_thumb, filename: "#{name14}_background_2x.jpeg")
doc14.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc14.video.blob).metadata[:duration])
doc14.save

d_g14 = DocumentariesGenre.create(documentary_id: doc14.id, genre_id: socialCultural.id)
d_g14 = DocumentariesGenre.create(documentary_id: doc14.id, genre_id: biography.id)


doc15 = Documentary.create!(title: "The Wonderful: Stories from the Space Station",
  description: "Over twenty years ago, rival nations put aside political and cultural differences and came together in a demonstration of international co-operation to create something unique—the International Space Station. For the first time in history, driven by his innate impulse to explore, man had a permanently inhabited foothold in the heavens. The Wonderful draws together personal stories from men and women from around the world who have been a part of this extraordinary endeavor, providing a fascinating insight into human nature and our relationship with planet Earth. These testimonials bring an intimacy and uniqueness to the story—bringing life in space alive, yet showing the strong emotional ties that bind these astronauts to the earth—and we are left not only with a sense of the vast 'velvet bottomless bucket' of the universe, but also the remarkable resilience and potential of mankind.",
  year: 2021,
  maturity_rating:"NOT RATED",
  type_media: "movie")
name15 = "the-wonderful"
doc15_video = open( curr_path_video + "#{name15}-trailer-1_a720p.m4v")
doc15_thumb = open( curr_path_thumbnail + "#{name15}_background_2x.jpeg")
doc15.video.attach(io: doc15_video, filename: "#{name15}-trailer-1_a720p.m4v")
doc15.thumbnail.attach(io: doc15_thumb, filename: "#{name15}_background_2x.jpeg")
doc15.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc15.video.blob).metadata[:duration])
doc15.save

d_g15 = DocumentariesGenre.create(documentary_id: doc15.id, genre_id: scienceNature.id)


doc16 = Documentary.create!(title: "Little Girl",
  description: "LITTLE GIRL is the moving portrait of 7-year-old Sasha, who has always known that she is a girl. Sasha’s family has recently accepted her gender identity, embracing their daughter for who she truly is while working to confront outdated norms and find affirmation in a small community of rural France. Realized with delicacy and intimacy, Sébastien Lifshitz’s documentary poetically explores the emotional challenges, everyday feats, and small moments in Sasha’s life.",
  year: 2021,
  maturity_rating:"NOT RATED",
  type_media: "movie")
name16 = "little-girl"
doc16_video = open( curr_path_video + "#{name16}-trailer-1_a720p.m4v")
doc16_thumb = open( curr_path_thumbnail + "#{name16}_background_2x.jpeg")
doc16.video.attach(io: doc16_video, filename: "#{name16}-trailer-1_a720p.m4v")
doc16.thumbnail.attach(io: doc16_thumb, filename: "#{name16}_background_2x.jpeg")
doc16.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc16.video.blob).metadata[:duration])
doc16.save

d_g16 = DocumentariesGenre.create(documentary_id: doc16.id, genre_id: socialCultural.id)


doc17 = Documentary.create!(title: "What We Left Unfinished",
  description: "Utterly unique in film history, Mariam Ghani's archival marvel is a probing and engrossing case study in censorship, authoritarianism, and political art. Thirty years after the Soviet withdrawal from Afghanistan and the subsequent civil war, during a new era of political uncertainty for the embattled nation, the film looks closely at the era of state-funded Afghan filmmaking during the country’s Communist era, bringing together writers, actors, and filmmakers to discuss five unfinished, unedited projects produced from 1978-1991. The studio politics and mishaps that accompany any film’s production here rise to the level of life-and-death conflict, as filmmakers recall coming up against the censorship of an authoritarian government, as well as unceasing threats of violence. The film raises potent, eternally relevant questions about what happens when the truth becomes a bargaining chip.",
  year: 2021,
  maturity_rating:"NOT RATED",
  type_media: "movie")
name17 = "what-we-left-unfinished"
doc17_video = open( curr_path_video + "#{name17}-trailer-1_a720p.m4v")
doc17_thumb = open( curr_path_thumbnail + "#{name17}_background_2x.jpeg")
doc17.video.attach(io: doc17_video, filename: "#{name17}-trailer-1_a720p.m4v")
doc17.thumbnail.attach(io: doc17_thumb, filename: "#{name17}_background_2x.jpeg")
doc17.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc17.video.blob).metadata[:duration])
doc17.save

d_g17 = DocumentariesGenre.create(documentary_id: doc17.id, genre_id: socialCultural.id)


doc18 = Documentary.create!(title: "Julia",
  description: "JULIA tells the story of the legendary cookbook author and television superstar who changed the way Americans think about food, television, and even about women. Using never-before-seen archival footage, personal photos, first-person narratives, and cutting-edge, mouth-watering food cinematography, the film traces Julia Child's surprising path, from her struggles to create and publish the revolutionary Mastering the Art of French Cooking (1961) which has sold more than 2.5 million copies to date, to her empowering story of a woman who found fame in her 50s, and her calling as an unlikely television sensation.",
  year: 2021,
  maturity_rating:"PG-13",
  type_media: "movie")
name18 = "julia"
doc18_video = open( curr_path_video + "#{name18}-trailer-1_a720p.m4v")
doc18_thumb = open( curr_path_thumbnail + "#{name18}_background_2x.jpeg")
doc18.video.attach(io: doc18_video, filename: "#{name18}-trailer-1_a720p.m4v")
doc18.thumbnail.attach(io: doc18_thumb, filename: "#{name18}_background_2x.jpeg")
doc18.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc18.video.blob).metadata[:duration])
doc18.save

d_g18 = DocumentariesGenre.create(documentary_id: doc18.id, genre_id: biography.id)


doc19 = Documentary.create!(title: "Against The Current",
  description: "How far do you have to travel to find yourself? And what sacrifices are you willing to make to get there? Veiga Grétarsdóttir is the first person in the world to attempt to kayak the 1,300 mile circumference of Iceland, counter-clockwise and against the current, an achievement that has been compared to climbing K2. Veiga’s personal journey is no less remarkable. She was born 44 years ago as a boy in a fishing village on the far west coast of Iceland. By the age of 38 Veigar had a wife and family but decided that she could no longer live as a man and decided to undergo gender reassignment. The inner struggle for Veigar to become Veiga was a journey as difficult if not more so than the solo kayak expedition she undertakes. These two stories of conflict and struggle are intertwined as the film follows her amazing 103 day journey around Iceland, with the magical, rugged coastline of the country a backdrop to the story of Veiga’s transition.",
  year: 2021,
  maturity_rating:"NOT RATED",
  type_media: "movie")
name19 = "against-the-current"
doc19_video = open( curr_path_video + "#{name19}-trailer-1_a720p.m4v")
doc19_thumb = open( curr_path_thumbnail + "#{name19}_background_2x.jpeg")
doc19.video.attach(io: doc19_video, filename: "#{name19}-trailer-1_a720p.m4v")
doc19.thumbnail.attach(io: doc19_thumb, filename: "#{name19}_background_2x.jpeg")
doc19.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc19.video.blob).metadata[:duration])
doc19.save

d_g19 = DocumentariesGenre.create(documentary_id: doc19.id, genre_id: biography.id)


doc20 = Documentary.create!(title: "Billie Eilish: The World's A Little Blurry",
  description: "'Billie Eilish: The World's a Little Blurry' tells the true coming-of-age story of the singer-songwriter and her rise to global superstardom. From award-winning filmmaker R.J. Cutler, the documentary offers a deeply intimate look at this extraordinary teenager's journey, at just seventeen years old, navigating life on the road, on stage, and at home with her family, while writing, recording and releasing her debut album 'When We All Fall Asleep, Where Do We Go?'",
  year: 2021,
  maturity_rating:"NOT RATED",
  type_media: "movie")
name20 = "billie-eilish-the-worlds-a-little-blurry"
doc20_video = open( curr_path_video + "#{name20}-trailer-1_a720p.m4v")
doc20_thumb = open( curr_path_thumbnail + "#{name20}_background_2x.jpeg")
doc20.video.attach(io: doc20_video, filename: "#{name20}-trailer-1_a720p.m4v")
doc20.thumbnail.attach(io: doc20_thumb, filename: "#{name20}_background_2x.jpeg")
doc20.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc20.video.blob).metadata[:duration])
doc20.save

d_g20 = DocumentariesGenre.create(documentary_id: doc20.id, genre_id: biography.id)
d_g20 = DocumentariesGenre.create(documentary_id: doc20.id, genre_id: music.id)


doc21 = Documentary.create!(title: "Meltdown",
  description: "MELTDOWN presents an extraordinary convergence of art & science, as we see two fascinating perspectives on the world's most pressing issue of Climate Change. The film features acclaimed photographer Lynn Davis, who has earned global recognition with her spectacular collection of photos of icebergs off the coast of Greenland; and Tony Leiserowitz, the Director of Yale's Climate Change Communication Project. MELTDOWN follows Lynn and Tony to the tiny, picturesque town of Ilulissat, Greenland, which is 'Ground Zero' for the climate crisis facing the world. There they discuss how beauty and tragedy share the stage, and each enlightens the other on ways to appreciate the wonders of the world while addressing the issues of how to help solve global crises. It's a small, intimate conversation set on a large canvas, showing how art and science can co-exist.",
  year: 2021,
  maturity_rating:"NOT RATED",
  type_media: "movie")
name21 = "meltdown"
doc21_video = open( curr_path_video + "#{name21}-trailer-1_a720p.m4v")
doc21_thumb = open( curr_path_thumbnail + "#{name21}_background_2x.jpeg")
doc21.video.attach(io: doc21_video, filename: "#{name21}-trailer-1_a720p.m4v")
doc21.thumbnail.attach(io: doc21_thumb, filename: "#{name21}_background_2x.jpeg")
doc21.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc21.video.blob).metadata[:duration])
doc21.save

d_g21 = DocumentariesGenre.create(documentary_id: doc21.id, genre_id: natureEcology.id)
d_g21 = DocumentariesGenre.create(documentary_id: doc21.id, genre_id: scienceNature.id)


doc22 = Documentary.create!(title: "Fly Like A Girl",
  description: "Fly Like A Girl is more than just a film. It’s a movement of young girls and women relentlessly pursuing their passion for aviation. A field currently dominated by men. Hearing first-hand stories from girls and women who dared to aim higher. From a lego-loving young girl who includes female pilots in her toy airplanes, to a courageous woman who helped lead shuttle missions to space, Fly Like A Girl shows us that women are in charge of their own destiny.",
  year: 2020,
  maturity_rating:"NOT RATED",
  type_media: "movie")
name22 = "fly-like-a-girl"
doc22_video = open( curr_path_video + "#{name22}-trailer-1_a720p.m4v")
doc22_thumb = open( curr_path_thumbnail + "#{name22}_background_2x.jpeg")
doc22.video.attach(io: doc22_video, filename: "#{name22}-trailer-1_a720p.m4v")
doc22.thumbnail.attach(io: doc22_thumb, filename: "#{name22}_background_2x.jpeg")
doc22.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc22.video.blob).metadata[:duration])
doc22.save

d_g22 = DocumentariesGenre.create(documentary_id: doc22.id, genre_id: socialCultural.id)


doc23 = Documentary.create!(title: "Dads",
  description: "A joyful exploration of modern fatherhood, this doc gathers the testimonies of dads around the world, from famous comedians to everyday parents. Their unfiltered stories speak to the beauty, struggles, and ridiculous hilarity of being a dad today.",
  year: 2020,
  maturity_rating:"NOT RATED",
  type_media: "movie")
name23 = "dads"
doc23_video = open( curr_path_video + "#{name23}-trailer-1_a720p.m4v")
doc23_thumb = open( curr_path_thumbnail + "#{name23}_background_2x.jpeg")
doc23.video.attach(io: doc23_video, filename: "#{name23}-trailer-1_a720p.m4v")
doc23.thumbnail.attach(io: doc23_thumb, filename: "#{name23}_background_2x.jpeg")
doc23.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc23.video.blob).metadata[:duration])
doc23.save

d_g23 = DocumentariesGenre.create(documentary_id: doc23.id, genre_id: socialCultural.id)


doc24 = Documentary.create!(title: "Apollo 11",
  description: "From director Todd Douglas Miller (Dinosaur 13) comes a cinematic event 50 years in the making. Crafted from a newly discovered trove of 65mm footage, and more than 11,000 hours of uncatalogued audio recordings, Apollo 11 takes us straight to the heart of NASA's most celebrated mission—the one that first put men on the moon, and forever made Neil Armstrong and Buzz Aldrin into household names. Immersed in the perspectives of the astronauts, the team in Mission Control, and the millions of spectators on the ground, we vividly experience those momentous days and hours in 1969 when humankind took a giant leap into the future.",
  year: 2019,
  maturity_rating:"G",
  type_media: "movie")
name24 = "dads"
doc24_video = open( curr_path_video + "#{name24}-trailer-1_a720p.m4v")
doc24_thumb = open( curr_path_thumbnail + "#{name24}_background_2x.jpeg")
doc24.video.attach(io: doc24_video, filename: "#{name24}-trailer-1_a720p.m4v")
doc24.thumbnail.attach(io: doc24_thumb, filename: "#{name24}_background_2x.jpeg")
doc24.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc24.video.blob).metadata[:duration])
doc24.save

d_g24 = DocumentariesGenre.create(documentary_id: doc24.id, genre_id: scienceNature.id)


doc25 = Documentary.create!(title: "The Elephant Queen",
  description: "Embark on an epic journey of family, courage, and coming home. Join Athena, the majestic matriarch, as she leads her elephant herd across an unforgiving African landscape. Narrated by Chiwetel Ejiofor. Official selection of TIFF and Sundance.",
  year: 2019,
  maturity_rating:"PG",
  type_media: "movie")
name25 = "the-elephant-queen"
doc25_video = open( curr_path_video + "#{name25}-trailer-1_a720p.m4v")
doc25_thumb = open( curr_path_thumbnail + "#{name25}_background_2x.jpeg")
doc25.video.attach(io: doc25_video, filename: "#{name25}-trailer-1_a720p.m4v")
doc25.thumbnail.attach(io: doc25_thumb, filename: "#{name25}_background_2x.jpeg")
doc25.runtime_size = sec_to_str(ActiveStorage::Analyzer::VideoAnalyzer.new(doc25.video.blob).metadata[:duration])
doc25.save

d_g25 = DocumentariesGenre.create(documentary_id: doc25.id, genre_id: natureEcology.id)




User.destroy_all

Profile.destroy_all

demoUser = User.create!(email:"demo-user@demo.com", password: "123456")
demoUser_guest = Profile.create!(user_id: demoUser.id, profile_name: "Guest", maturity_setting: "NC-17", autoplay_next_episode: true, autoplay_preview: true)
guest_avatar = open("#{Rails.root}/app/assets/images/profile4.png")
demoUser_guest.avatar.attach(io: guest_avatar, filename: "profile4.png")
      
demoUser_kids = Profile.create!(user_id: demoUser.id, profile_name: "Kids", maturity_setting: "PG", autoplay_next_episode: true, autoplay_preview: true)
kids_avatar = open("#{Rails.root}/app/assets/images/profile_kids.png")
demoUser_kids.avatar.attach(io: kids_avatar, filename: "profile_kids.png")
      
puts "All seeded, thank you for asking!"