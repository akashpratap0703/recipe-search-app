Recipe Search App
This is a frontend React application that allows users to search for recipes, view them in a grid layout, and click on individual recipes to view more details.

Table of Contents
1. Technologies Used
2. Setup Instructions
3. Components
4. Run the App
5. How to Build the App

Technologies Used
React: JavaScript library for building user interfaces.
React Icons: Used for adding icons to components (installed via npm install react-icons).
CSS: Styling for components and layout.

Setup Instructions
1. Clone the Repository
Clone the project repository to your local machine.
git clone https://github.com/akashpratap0703/recipe-search-app.git
2. Install Dependencies
Navigate into the project directory and install the necessary dependencies using npm:
cd recipe-search-app
npm install
This will install all the required packages, including React, React Router, and React Icons.

Components
The app consists of the following main components:

1. RecipeCard
Purpose: Displays a single recipe's image, name, and cuisine.
Props:
recipe: An object containing recipe details (id, image, name, cuisine).
onClick: A callback function triggered when the card is clicked.
2. SearchBar
Purpose: Provides an input field to search for recipes by their name.
Props:
value: The current value of the search input.
onSearchChange: Function to update the value of the search input.
onSearchClick: Function that gets triggered when the search button is clicked.
onKeyDown: Function that handles pressing the Enter key in the search input.
3. RecipeGrid
Purpose: Displays a grid of recipe cards.
Props:
recipes: An array of recipe objects to be displayed.
onRecipeClick: A callback function triggered when a recipe card is clicked.
4. RecipeDetails
Purpose: Displays detailed information about a selected recipe.
Props:
recipe: An object containing the details of the selected recipe.
onBackClick: Function triggered when the back button is clicked to return to the grid view.
5. App
Purpose: The main component that ties everything together. Handles searching for recipes and toggling between the recipe grid and the detailed view.
State:
searchQuery: The current search input from the user.
recipes: A list of recipes fetched from the backend.
selectedRecipe: The recipe currently selected to show details.

Functions:
fetchRecipes: Fetches a list of recipes based on the search query.
fetchRecipesList: Fetches the full list of recipes.
handleSearchIconClick: Handles the search when the search icon is clicked.
handleSearchChange: Updates the search input.
handleKeyDown: Handles Enter key press for initiating a search.
handleRecipeClick: Sets the selected recipe to show details.
handleBackClick: Navigates back to the recipe grid.

Run the App
To run the app locally, follow these steps:

Ensure you have Node.js installed on your computer. You can download it from here.

After cloning the repository and installing dependencies, start the development server:
npm start

This will start the app in development mode, and you should be able to view it in your browser at http://localhost:3000.

How to Build the App
To build the app for production:

Run the build command:
npm run build

This will create an optimized production build of the app in the build/ folder.

After the build completes, you can deploy it using any hosting service such as GitHub Pages, Netlify, or Vercel.
API Endpoints (Backend)
The frontend interacts with the backend for fetching recipes. Below are the endpoints it expects:

GET /recipes/search?searchParam=<query>: Fetches recipes based on a search query.
GET /recipes/list: Fetches the complete list of recipes.
Make sure the backend API is running and accessible to the frontend application.