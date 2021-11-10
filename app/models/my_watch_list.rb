class MyWatchList < ApplicationRecord
  validates :profile_id, :documentary_id, presence: true
  validates :documentary_id, uniqueness: { scope: :profile_id }

  # has_many :profiles
  # has_many :documentaries

  belongs_to :profile,
    primary_key: :id,
    foreign_key: :profile_id,
    class_name: :Profile

  belongs_to :documentary,
    primary_key: :id,
    foreign_key: :documentary_id,
    class_name: :Documentary

  

end
