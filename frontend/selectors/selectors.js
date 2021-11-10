export const selectDocumentariesByGenre = (state, genreId) => {
  // if (!state.entities.genres) return [];
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