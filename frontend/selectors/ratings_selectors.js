
export const selectRatingsByProfile = (ratings, profileId) => {

  return Object.values(ratings).filter((rating) => {

    return rating.profileId === profileId
  });
}