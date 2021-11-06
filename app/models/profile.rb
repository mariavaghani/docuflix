class Profile < ApplicationRecord

  MATURITY_SETTINGS = [ "TV-Y", "TV-Y7", "TV-G", "G", "TV-PG", "PG", "PG-13", 
    "TV-14", "R", "TV-MA", "NC-17"]

  validates :user_id, presence: true
  validates :profile_name, presence: true, uniqueness: { scope: :user_id }
  validates :maturity_setting, presence: true, inclusion: { in: MATURITY_SETTINGS }
  validates :autoplay_next_episode, :autoplay_preview, presence: true,
    inclusion: { in: [true, false] }
  validate :user_should_have_5_max_profiles

  # belongs_to :user

  has_one :user,
    primary_key: :user_id,
    foreign_key: :id,
    class_name: :User

  has_many :user_profiles,
    through: :user,
    source: :profiles

  

  def user_should_have_5_max_profiles
    if user && user_profiles.length > 5 
      errors[:user_profiles] << 'You could have only up to 5 watch profiles'
    end
  end
end
