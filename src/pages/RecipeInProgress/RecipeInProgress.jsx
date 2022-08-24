import React from 'react';
import { useHistory } from 'react-router-dom';

function RecipeInProgress() {
  const history = useHistory();

  const handleRoute = () => {
    history.push('/done-recipes');
  };

  return (
    <section>
      <div>Receitas em progresso</div>
      <img data-testid="recipe-photo" src="" alt="" />
      <h1 data-testid="recipe-title">Título</h1>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritos</button>
      <p data-testid="recipe-category">Categoria</p>
      <ul data-testid={ `${index}-ingredient-step` }>Ingredientes</ul>
      <p data-testid="instructions">Instruções</p>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ handleRoute }
      >
        Finish Recipes
      </button>
    </section>
  );
}

export default RecipeInProgress;
