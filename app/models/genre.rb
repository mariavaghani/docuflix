class Genre < ApplicationRecord
  validates :genre, presence: true
  has_many :documentaries_genres, dependent: :destroy
  puts "hi"
  has_many :documentaries, through: :documentaries_genres
end
