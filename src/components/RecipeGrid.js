import React from 'react';
import RecipeCard from './RecipeCard';
import '../App.css';

const RecipeGrid = ({ recipes, onRecipeClick }) => {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} onClick={() => onRecipeClick(recipe)} />
      ))}
    </div>
  );
};

export default RecipeGrid;
