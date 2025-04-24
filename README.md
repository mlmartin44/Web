# Web
🎬 Mariah’s Movies — Frontend Guide
Welcome to Mariah’s Movies, a responsive web application for browsing, adding, and modifying movie records in a database.

🖥️ Live Demo
Home (View Data): /index.html

Add Movie: /addMovies.html

Modify Movie: /modifyMovies.html

📚 Features
View all movies in a sortable, searchable table.

Add new movies using a user-friendly form.

Modify existing movies via a dropdown selection and auto-filled form.

Toastr notifications for user feedback (success/error messages).

Responsive, pastel-themed UI with modern design.

🗂️ Navigation
A navigation bar appears at the top of every page:

Home: Returns to the main movies list.

Add Movie: Go to the movie creation form.

Modify Movie: Edit details for existing movies.

👀 Viewing Movies
Go to the Home page (index.html).

Browse the table of all movies.

Use column headers to sort.

Use the search box (above the table) to filter.

The table displays: ID, Title, Year, Genre, and Director.

➕ Adding a Movie
Navigate to Add Movie in the navbar.

Fill out the form:

Title — Enter the movie name.

Year — Enter a valid year (e.g., 2022).

Genre — Select a genre from the dropdown.

Director — Enter the director’s name.

Click “Add Movie”.

If successful, you’ll see a purple toast notification:

“New Movie Added to Library!”

The new movie appears on the Home page table.

✏️ Modifying a Movie
Navigate to Modify Movie.

Select a Movie ID (shows as ID - Title) from the dropdown.

The form will auto-fill with that movie’s details.

Edit any fields as needed (Title, Year, Genre, Director).

Click “Update Movie”.

If successful, you’ll see a purple toast notification:

“Movie updated successfully!”

Return to Home to see the updated info.

✅ User Feedback
All actions (add/update) provide instant notification via Toastr in a deep purple style, matching the site’s theme.

Error messages are also shown as toast notifications if validation fails or a server error occurs.

💡 Accessibility & Responsiveness
Forms use proper <label> elements for accessibility.

The UI is styled for both desktop and tablet screens.

Color palette ensures good contrast and readability.

🔗 Technologies Used
HTML5, CSS3 (custom & Bootstrap 5)

JavaScript (ES6)

Toastr.js for notifications

Grid.js for the data table

Google Fonts (Playfair Display)

⚠️ Troubleshooting
If you don’t see notifications: make sure you have an internet connection (Toastr loads from CDN).

If the table does not load: check API connectivity.

Always reload after adding or modifying movies to see updates.

🧑‍💻 For Developers
All JS files are in /js/ (getMovies.js, postMovies.js, putMovies.js)

All CSS is in /stylesheets/moviestheme.css

Modify page auto-loads movies for editing (no need to manually refresh).

🚀 Quick Start
Clone or download the repository.

Make sure the backend API is running and accessible.

Open index.html in your browser (use Live Server or similar for best experience).

✨ Enjoy using Mariah’s Movies!


**Questions or need help?**  
Message me or open an issue!

## 🧑‍💻 Author
Mariah Martin — [@mlmartin44](https://github.com/mlmartin44)
Email: mlmarti@pointpark.edu
