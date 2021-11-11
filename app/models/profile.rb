class Profile < ApplicationRecord

  MATURITY_SETTINGS = [ "TV-Y", "TV-Y7", "TV-G", "G", "TV-PG", "PG", "PG-13", 
    "TV-14", "R", "TV-MA", "NC-17"]

  validates :user_id, presence: true
  validates :profile_name, presence: true, uniqueness: { scope: :user_id }
  validates :maturity_setting, presence: true, inclusion: { in: MATURITY_SETTINGS }
  validates :autoplay_next_episode, :autoplay_preview, inclusion: { in: [true, false] }

  # belongs_to :user

  has_one_attached :avatar

  has_many :watch_lists,
    primary_key: :id,
    foreign_key: :documentary_id,
    class_name: :MyWatchList,
    dependent: :destroy

  has_many :documentaries_in_watch_list,
    through: :watch_lists,
    source: :documentary
  
  has_one :user,
    primary_key: :user_id,
    foreign_key: :id,
    class_name: :User

  has_many :user_profiles,
    through: :user,
    source: :profiles

  has_many :ratings, dependent: :destroy

  has_many :rated_documentaries,
    through: :ratings,
    source: :documentary


end
