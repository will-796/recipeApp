import React, { useContext, useEffect, useState } from 'react';
import FavoriteRecipeCard from '../../components/FavoriteRecipeCard/FavoriteRecipeCard';
import Context from '../../context';
import './style.css';

function FavoriteRecipes() {
  const {
    setShowFooter,
    setPageName,
    setShowHeader,
    setFavoriteRecipes,
    favoriteRecipes,
  } = useContext(Context);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setShowHeader({
      showName: true,
      showSearch: false,
      showProfile: true,
    });
    setPageName('Favorite Recipes');
    setShowFooter(false);
    setFavoriteRecipes(
      JSON.parse(localStorage.getItem('favoriteRecipes') || '[]'),
    );
  }, []);

  const filteredData = favoriteRecipes.filter(
    (recipe) => (filter === 'all' ? true : recipe.type === filter),
  );

  return (
    <section className="FavoriteRecipe">
      <div className="filterContainer">
        <button
          type="button"
          className="filter-food"
          data-testid="filter-by-food-btn"
          onClick={ () => setFilter('food') }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setFilter('drink') }
        >
          Drinks
        </button>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setFilter('all') }
        >
          All
        </button>
      </div>
      <div className="favCardsContainer">
        {filteredData.map((recipe, index) => (
          <FavoriteRecipeCard key={ index } index={ index } recipe={ recipe } />
        ))}
      </div>
    </section>
  );
}

export default FavoriteRecipes;
