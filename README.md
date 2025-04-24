🎬 Mariah’s Movies — Frontend
A modern web app for browsing, adding, and modifying movies in a PostgreSQL database.
Built with HTML, CSS (Bootstrap & custom pastel theme), and JavaScript (ES6).
Connects to a cloud-hosted RESTful API.

📑 Table of Contents
Project Overview

Installation & Setup

Usage Instructions

API Integration

Contributing Guidelines

License

1. Project Overview
Mariah’s Movies (Frontend)
A responsive, user-friendly interface for managing a movie database.
Goals:

View, add, and update movie records easily

Clean, pastel-themed UI with toast notifications

Works with a remote RESTful API

Key Tech:

HTML5

CSS3 (Bootstrap 5, custom styles)

JavaScript (ES6)

Toastr.js for notifications

Grid.js for data tables

2. Installation & Setup
Prerequisites:

Node.js & npm (if you want to run a local server for static files)

Clone & Run:

bash
Copy
Edit
git clone https://github.com/yourusername/mariahs-movies-frontend.git
cd mriahs-movies-frontend
# If you want local server for static HTML/CSS/JS (optional)
npm install -g serve
serve .
Or, simply open index.html with Live Server (VS Code) or your browser.

3. Usage Instructions
Navigation:

Home (index.html): View all movies in a table

Add Movie (addMovies.html): Submit new movies to the database

Modify Movie (modifyMovies.html): Select and update existing movie info

How to Use:

a) View Movies
Go to Home

Table is sortable, searchable, and paginated

<img src="images/movies-table.png" width="650">
b) Add a Movie
Navigate to Add Movie

Fill out the form: Title, Year, Genre, Director

Click "Add Movie"

Success = purple toast “New Movie Added to Library!”

<img src="images/add-movie-form.png" width="430">
c) Modify a Movie
Go to Modify Movie

Select an ID from the dropdown (shows “ID - Title”)

Edit any details in the form

Click "Update Movie"

Success = toast “Movie updated successfully!”

<img src="images/modify-movie-form.png" width="430">
All actions give instant feedback with Toastr notifications.

4. API Integration
Base URL:

bash
Copy
Edit
https://movies-api-4s7l.onrender.com/api/v1/movies
Endpoints Used:

GET /api/v1/movies — get all movies

POST /api/v1/movies — add a movie

PUT /api/v1/movies/:id — update a movie

Example:

js
Copy
Edit
fetch("https://movies-api-4s7l.onrender.com/api/v1/movies")
  .then(res => res.json())
  .then(data => /* render table */)
Frontend JS files use fetch() to interact with the API for all CRUD operations.

5. Contributing Guidelines
Fork this repo, then clone your fork:

bash
Copy
Edit
git clone https://github.com/yourusername/mariahs-movies-frontend.git
Create a new branch for your feature or fix:

bash
Copy
Edit
git checkout -b feature/your-feature
Commit your changes with clear messages.

Push to your fork and open a Pull Request on the main repo.

Coding Standards:

Use consistent indentation (2 or 4 spaces).

JS: Follow ES6+ syntax, use semicolons.

CSS: Group related rules, comment major sections.

6. License
This project is licensed under the MIT License.

✨ Enjoy using Mariah’s Movies!


**Questions or need help?**  
Message me or open an issue!

## 🧑‍💻 Author
Mariah Martin — [@mlmartin44](https://github.com/mlmartin44)
Email: mlmarti@pointpark.edu
