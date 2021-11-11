import * as RatingApiUtil from "../utils/ratings_utils";

export const RECEIVE_PROFILE_RATINGS = 'RECEIVE_PROFILE_RATINGS';
export const REMOVE_RATING_FROM_DOCUMENTARY = 'REMOVE_RATING_FROM_DOCUMENTARY';
export const RECEIVE_RATING = 'RECEIVE_RATING';

export const receiveProfileRatings = (ratings) => {
  return {
    type: RECEIVE_PROFILE_RATINGS,
    ratings
  }
}

export const removeRatingFromDocumentary = (ratingId) => {
  return {
    type: REMOVE_RATING_FROM_DOCUMENTARY,
    ratingId
  }
}

export const receiveRating = (rating) => {
  return {
    type: RECEIVE_RATING,
    rating
  }
}

export const addRatingToDocumentary = (profileId, documentaryId, ratingValue) => dispatch => {
  console.log(`profileId: `, profileId);
  
  return RatingApiUtil.addRatingToDocumentary(profileId, documentaryId, ratingValue)
    .then(rating => {
      return dispatch(receiveRating(rating))
    })
}

export const fetchProfileRatings = (profileId) => dispatch => {
  return RatingApiUtil.fetchProfileRatings(profileId)
    .then(ratings => {
      return dispatch(receiveProfileRatings(ratings))
    })
}

export const deleteRatingFromDocumentary = (ratingId) => dispatch => {
  return RatingApiUtil.deleteRatingFromDocumentary(ratingId)
    .then(() => {
      return dispatch(removeRatingFromDocumentary(ratingId))
    })
}

export const updateDocumentaryRating = (ratingObject, newValue) => dispatch => {
  return RatingApiUtil.updateDocumentaryRating(ratingObject, newValue)
    .then(rating => {
      return dispatch(receiveRating(rating))
    },
      // (res) => dispatch(receiveProfileErrors(res.responseJSON))
      )
}