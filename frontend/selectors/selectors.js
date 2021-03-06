export const selectDocumentariesByGenre = (state, genreId) => {
  return Object.values(state.entities.documentaries).filter((docu) => {
    
    if (docu.genreIds) return docu.genreIds.includes(genreId)
  });
}

export const selectGenresByDocumentary = (state, documentaryId) => {
  
  return Object.values(state.entities.genres).filter((genre) => {
    
    return genre.documentaryIds.includes(documentaryId)
  });
}

export const selectAllUserProfilesWithoutSelected = ( allProfiles, selectedProfileId ) => {
  Object.freeze(allProfiles);
  const profilesToReturn = Object.assign({}, allProfiles);
  delete profilesToReturn[selectedProfileId];
  
  return Object.values(profilesToReturn);
}

export const parseGenreIdsFromFetchedDocumentaries = (documentaries) => {
  let genreIdsToState = [];
  Object.values(documentaries).forEach(documentary => {
    documentary.genreIds.forEach(genreId => {
      if (!genreIdsToState.includes(genreId)) genreIdsToState.push(genreId);
    });
  });
  return genreIdsToState;
}

export const documentaryInMyList = (documentaryId, myWatchList) => {

  return Object.values(myWatchList).some(watchListObj => (
    watchListObj.documentaryId === documentaryId
  ));

}

export const getWatchListId = (documentaryId, myWatchList) => {
  for (let i = 0; i < Object.values(myWatchList).length; i++) {
    const watchList = Object.values(myWatchList)[i];
    if (watchList.documentaryId === documentaryId) {
      return watchList.id
    };
  }
}

export const getDocumentariesFromWatchList = (documentaries, watchLists) => {
  let documentariesToReturn = [];

  Object.values(watchLists).forEach(watchList => {
    documentariesToReturn.push(documentaries[watchList.documentaryId]);
  });

  return documentariesToReturn;
}

export const pickRandomDocumentary = (documentaries) => {
  if (!documentaries) return 1;
  const ids = Object.keys(documentaries);
  return documentaries[ids[ids.length * Math.random() << 0]];
}

export const selectAllDocumentaries = (documentaries) => {
  Object.freeze(documentaries);
  const onlyDocumentaries = Object.assign({}, documentaries);
  delete onlyDocumentaries.genreIds;

  return Object.values(onlyDocumentaries);
}

export const documentaryRating = (ratings, documentaryId) => {
  for (let i = 0; i < Object.values(ratings).length; i++) {
    const rating = Object.values(ratings)[i];
    if (rating.documentaryId === documentaryId) {
      return rating;
    };
  }
  return undefined;
}