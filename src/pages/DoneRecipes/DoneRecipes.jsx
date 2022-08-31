import React, { useContext, useEffect, useState } from 'react';
import DoneRecipeCard from '../../components/DoneRecipeCard/DoneRecipeCard';
import Context from '../../context';
import './style.css';

function DoneRecipes() {
  const { setShowFooter, setPageName, setShowHeader } = useContext(Context);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setShowHeader({
      showName: true,
      showSearch: false,
      showProfile: true,
    });
    setPageName('Done Recipes');
    setShowFooter(false);
  }, []);

  const doneRecipesData = JSON.parse(
    localStorage.getItem('doneRecipes') || '[]',
  );

  const filteredData = doneRecipesData.filter(
    (recipe) => (filter === 'all' ? true : recipe.type === filter),
  );

  return (
    <section className="DoneRecipes">
      <div className="filterContainer">
        <button
          type="button"
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
      <div className="doneCardsContainer">
        {filteredData.map((recipe, index) => (
          <DoneRecipeCard key={ recipe.id } index={ index } recipe={ recipe } />
        ))}
      </div>
    </section>
  );
}

export default DoneRecipes;
