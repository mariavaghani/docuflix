export const addDocumentaryToWatchList = (profileId, documentaryId) => {
  return $.ajax({
    method: "POST",
    url: `/api/my_watch_lists`,
    error: (err) => console.log(err),
    data: {
      watch_list: {
        profile_id: profileId,
        documentary_id: documentaryId,
      }
    }
  })
}

export const removeDocumentaryFromWatchList = (watchListId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/my_watch_lists/${watchListId}`,
    error: (err) => console.log(err),
  })
}

export const fetchProfileWatchList = (profileId) => {
  return $.ajax({
    method: "GET",
    url: `/api/profiles/${profileId}/my_watch_lists`,
    error: (err) => console.log(err),
  })
}