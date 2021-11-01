

export const fetchDocumentaries = (filters) => {
  return $.ajax({
    method: "GET",
    url: "/api/documentaries",
    error: (err) => console.log(err),
    data: { filters }
  })
}

// export const fetchDocumentariesByGenre = (genreId) => {
//   return $.ajax({
//     method: "GET",
//     url: "/api/documentaries/",
//     error: (err) => console.log(err),
//     data: { genreId }
//   })
// }

