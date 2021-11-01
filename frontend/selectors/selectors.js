export const selectDocumentariesByGenre = (state, genreId) => {
  
  return Object.values(state.entities.documentaries).filter((docu) => {
    return docu.genreIds.includes(genreId)
  });
}