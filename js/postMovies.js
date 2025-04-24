document.addEventListener('DOMContentLoaded', function () {
    const formEl = document.getElementById('movieForm');
    if (!formEl) {
        console.error('Form not found!');
        return;
    }

    formEl.addEventListener('submit', function (event) {
        event.preventDefault();

        // Grab values from the form fields (matching your HTML)
        const title = document.getElementById('title').value.trim();
        const year = Number(document.getElementById('year').value.trim());
        const genre = document.getElementById('genre').value;
        const director = document.getElementById('director').value.trim();

        // Improved validation!
        if (!title || isNaN(year) || year <= 1800 || !genre || !director) {
            toastr.error('Please fill out all fields with valid values.');
            return;
        }

        const data = { title, year, genre, director };

        console.log("Data being sent:", data);

        fetch('https://movies-api-4s7l.onrender.com/api/v1/movies', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) throw new Error('Failed to add movie');
            return response.json();
        })
        .then(result => {
            toastr.success('New Movie Added to Library!');
            formEl.reset();
        })
        .catch(error => {
            console.error(error);
            toastr.error('Failed to add movie. Please try again.');
        });
    });
});
