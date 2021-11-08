json.extract! @profile, :id, :profile_name , :maturity_setting, :autoplay_next_episode, :autoplay_preview
json.avatar url_for(@profile.avatar)