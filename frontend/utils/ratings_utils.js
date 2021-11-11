export const addRatingToDocumentary = (profileId, documentaryId, ratingValue) => {
  return $.ajax({
    method: "POST",
    url: `/api/ratings`,
    error: (err) => console.log(err),
    data: {
      rating: {
        profile_id: profileId,
        documentary_id: documentaryId,
        rating_value: ratingValue
      }
    }
  })
}

export const updateDocumentaryRating = (rating, newRatingValue) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/ratings/${rating.id}`,
    error: (err) => console.log(err),
    data: {
      rating: {
        id: rating.id,
        profile_id: rating.profileId,
        documentary_id: rating.documentaryId,
        rating_value: newRatingValue,
        
      }
    }
  })
}

export const deleteRatingFromDocumentary = (ratingId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/ratings/${ratingId}`,
    error: (err) => console.log(err),
  })
}

export const fetchProfileRatings = (profileId) => {
  return $.ajax({
    method: "GET",
    url: `/api/profiles/${profileId}/ratings`,
    error: (err) => console.log(err),
  })
}