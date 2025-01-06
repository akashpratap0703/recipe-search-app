import React, { useState,useEffect } from 'react';
import SearchBar from './components/SearchBar';
import RecipeGrid from './components/RecipeGrid';
import RecipeDetails from './components/RecipeDetails';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Fetch recipes based on search query
  const fetchRecipes = (query) => {
    if (query.length >= 3) {
      fetch(`/recipes/search?searchParam=${query}`)
        .then((response) => response.json())
        .then((data) => setRecipes(data))
        .catch((error) => console.error("Error fetching recipes:", error));
    }
  };

  const fetchRecipesList = () => {
      fetch(`/recipes/list`)
        .then((response) => response.json())
        .then((data) => setRecipes(data))
        .catch((error) => console.error("Error fetching recipes:", error));
  };
  // Handle search icon click
  const handleSearchIconClick = () => {
    if (searchQuery.length >= 3) {
      fetchRecipes(searchQuery);
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchQuery.length >= 3) {
      fetchRecipes(searchQuery);  // Trigger the search when Enter is pressed
    }
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackClick = () => {
    setSelectedRecipe(null);
  };
  useEffect(() => {
    fetchRecipesList();  // Fetch all recipes initially
  }, []);
  return (
    <div className="App">
      <h1>Recipe Search</h1>
      {!selectedRecipe ? (
        <>
          <SearchBar 
            value={searchQuery} 
            onKeyDown={handleKeyDown}  
            onSearchChange={handleSearchChange}
            onSearchClick={handleSearchIconClick} 
          />
          <RecipeGrid recipes={recipes} onRecipeClick={handleRecipeClick} />
        </>
      ) : (
        <RecipeDetails recipe={selectedRecipe} onBackClick={handleBackClick}/>
      )}
    </div>
  );
};

export default App;
