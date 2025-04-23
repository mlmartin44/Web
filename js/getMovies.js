const API_URL = "https://movies-api-4s7l.onrender.com/api/v1/movies";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const formattedData = data.map(movie => [
      movie.id,
      movie.title,
      movie.year,
      movie.genre,
      movie.director
    ]);

    new gridjs.Grid({
      columns: [
        { name: "ID", sort: true },
        { name: "Title", sort: true },
        { name: "Year", sort: true },
        { name: "Genre", sort: true },
        { name: "Director", sort: true }
      ],
      data: formattedData,
      search: true,
      sort: true,
      pagination: {
        enabled: true,
        limit: 10
      },
      resizable: true
      // Style is handled by your stylesheet!
    }).render(document.getElementById("grid-container"));
  })
  .catch(error => {
    console.error("Error fetching data", error);
    document.getElementById("grid-container").innerHTML =
      "<p style='text-align:center; color:#b92b27; margin-top:32px;'>Failed to load movies. Please try again later.</p>";
  });
