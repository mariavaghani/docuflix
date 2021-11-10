class Documentary < ApplicationRecord

  validates :title, :description, :year, presence: true

  has_many :documentaries_genres, dependent: :destroy
  has_many :genres, through: :documentaries_genres

  # has_many :watch_lists,
  #   primary_key: :id,
  #   foreign_key: :documentary_id,
  #   class_name: :MyWatchList,
  #   dependent: :destroy

  

  has_one_attached :video
  has_one_attached :thumbnail
end
