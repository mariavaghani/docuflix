json.extract! @profile, :id, :profile_name , :maturity_setting, :autoplay_next_episode, :autoplay_preview
json.documentaryIds @profile.documentaries_in_watch_list
json.avatar url_for(@profile.avatar)