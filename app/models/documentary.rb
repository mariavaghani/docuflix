class Documentary < ApplicationRecord

  validates :title, :description, :year, presence: true

  has_one_attached :video
  has_one_attached :thumbnail
end
