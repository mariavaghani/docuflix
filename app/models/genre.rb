class Genre < ApplicationRecord
  validates :genre, presence: true
  has_many :documentaries_genres, dependent: :destroy

  has_many :documentaries, through: :documentaries_genres
  # QUESTION: associations in question
end
