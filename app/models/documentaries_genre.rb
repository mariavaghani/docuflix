class DocumentariesGenre < ApplicationRecord
  validates :documentary_id, presence: true, uniqueness: { scope: :genre_id }
  validates :genre_id, presence: true

  belongs_to :genre
  belongs_to :documentary
end
