import React from 'react';
import '../App.css';
import { FaArrowLeft } from 'react-icons/fa'; 

const RecipeDetails = ({ recipe,onBackClick }) => {
    const getTagColor = () => {
        const colors = ['#FF5733', '#33FF57', '#87CEEB', '#FF33A1', '#FFFF33']
        return colors[Math.floor(Math.random() * colors.length)]; 
      };
  return (
    <div className="recipe-details">
      <div className="heading-wrapper">
        <button className="back-button" onClick={onBackClick}>
          <FaArrowLeft />
        </button>
      </div>
      <h2>{recipe.name}</h2>
      <div className="recipe-meta">
        <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
        <p><strong>Servings:</strong> {recipe.servings}</p>
        <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing}</p>
        <p><strong>Rating:</strong> {recipe.rating} / 5 ({recipe.reviewCount} reviews)</p>
      </div>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <div className="tags">
        {recipe.tags.map((tag, index) => (
          <span 
            key={index} 
            className="tag" 
            style={{ backgroundColor: getTagColor() }}
          >
            {tag}
          </span>
        ))}
      </div>
      <h3>Ingredients</h3>
      <ul className='no-bullets'>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetails;


