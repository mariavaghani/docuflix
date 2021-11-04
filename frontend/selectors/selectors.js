export const selectDocumentariesByGenre = (state, genreId) => {
  
  return Object.values(state.entities.documentaries).filter((docu) => {
    return docu.genreIds.includes(genreId)
  });
}

export const selectGenresByDocumentary = (state, documentaryId) => {
  console.log(`state in selectors: `, state);
  
  return Object.values(state.entities.genres).filter((genre) => {
    
    return genre.documentaryIds.includes(documentaryId)
  });
}