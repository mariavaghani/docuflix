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