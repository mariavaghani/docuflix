class Rating < ApplicationRecord
  validates :profile_id, :documentary_id, presence: true
  validates :profile_id, uniqueness: { scope: :documentary_id }
  validates :rating_value, inclusion: { in: [true, false] }

  belongs_to :documentary
  belongs_to :profile
end
