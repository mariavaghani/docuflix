export const fetchUserProfiles = (userId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/profiles`,
    error: (err) => console.log(err),
  })
}

export const fetchUserProfile = (profileId) => {
  return $.ajax({
    method: "GET",
    url: `/api/profiles/${profileId}`,
    error: (err) => console.log(err),
  })
}

export const createUserProfile = (profile) => {
  return $.ajax({
    method: "POST",
    url: `/api/profiles`,
    error: (err) => console.log(err),
    data: {
      profile: {
        id: profile.id,
        profile_name: profile.profileName,
        maturity_setting: profile.maturitySetting,
        autoplay_next_episode: profile.autoplayNextEpisode,
        autoplay_preview: profile.autoplayPreview,
        user_id: profile.userId,
        avatar: profile.avatar
      }
    }
  })
}

export const updateUserProfile = (profile) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/profiles/${profile.id}`,
    error: (err) => console.log(err),
    data: {
      profile: {
        id: profile.id,
        profile_name: profile.profileName,
        maturity_setting: profile.maturitySetting,
        autoplay_next_episode: profile.autoplayNextEpisode,
        autoplay_preview: profile.autoplayPreview,
        avatar: profile.avatar,
        avatar_modified: profile.avatarModified
      }
    }
  })
}

export const MATURITY_SETTINGS = ["TV-Y", "TV-Y7", "TV-G", "G", "TV-PG", "PG", "PG-13",
  "TV-14", "R", "TV-MA", "NC-17"]
