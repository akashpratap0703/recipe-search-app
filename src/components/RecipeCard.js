import React from 'react';
import '../App.css';

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div className="recipe-card" onClick={onClick}>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <div className="recipe-info">
        <h3>{recipe.name}</h3>
        <p>{recipe.cuisine}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
