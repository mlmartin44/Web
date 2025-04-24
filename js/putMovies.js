const API_BASE_URL = "https://movies-api-4s7l.onrender.com/api/v1/movies";

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('updateMovieForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const movieId = document.getElementById('movieId').value.trim();
        const title = document.getElementById('updateTitle').value.trim();
        const year = Number(document.getElementById('updateYear').value.trim()); 
        const genre = document.getElementById('updateGenre').value;
        const director = document.getElementById('updateDirector').value.trim();

        // field validation!
        if (!movieId || !title || isNaN(year) || year <= 1800 || !genre || !director) {
            toastr.error('Please fill out all fields with valid values.');
            return;
        }

        const updatedMovie = { title, year, genre, director };

        fetch(`${API_BASE_URL}/${movieId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedMovie)
        })
        .then(response => {
            if (!response.ok) {
                return response.text().then(err => { throw new Error(err); });
            }
            return response.text();  // This is the line you should change!
        })
        .then(msg => {
            form.reset();
            toastr.success(msg || 'Movie updated successfully!');
        })
        .catch(error => {
            toastr.error(error.message || "Unknown error");
        });
    });
});
