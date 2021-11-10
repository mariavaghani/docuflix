export const fetchGenres = (filters) => {
  return $.ajax({
    method: "GET",
    url: "/api/genres",
    error: (err) => console.log(err),
    data: { filters }
  })
}