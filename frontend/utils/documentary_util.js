

export const fetchDocumentaries = (filters) => {
  return $.ajax({
    method: "GET",
    url: "/api/documentaries",
    error: (err) => console.log(err),
    data: { filters }
  })
}

export const fetchDocumentary = (docuId) => (
  $.ajax({
    url: `/api/documentaries/${docuId}`,
    method: 'GET',
  })
)

// export const fetchDocumentariesByGenre = (genreId) => {
//   return $.ajax({
//     method: "GET",
//     url: "/api/documentaries/",
//     error: (err) => console.log(err),
//     data: { genreId }
//   })
// }

