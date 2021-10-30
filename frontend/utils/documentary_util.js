// export const fetchDocumentaries = (filters) => {
//   return $.ajax({
//     method: "GET",
//     url: "/api/benches",
//     error: (err) => console.log(err),
//     data: { filters }
//   })
// }

export const fetchDocumentaries = () => {
  return $.ajax({
    method: "GET",
    url: "/api/documentaries",
    error: (err) => console.log(err),
    // data: { filters }
  })
}

// export const fetchDocumentary = (documentary) => {
//   return $.ajax({
//     method: "GET",
//     url: "/api/documentaries/${}",
//     error: (err) => console.log(err),
//     data: { documentary }
//   })
// }

