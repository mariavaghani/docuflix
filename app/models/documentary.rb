class Documentary < ApplicationRecord

  validates :title, :description, :year, presence: true

  has_many :documentaries_genres, dependent: :destroy
  has_many :genres, through: :documentaries_genres

  has_one_attached :video
  has_one_attached :thumbnail
end
