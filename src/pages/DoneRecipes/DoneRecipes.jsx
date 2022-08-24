import React, { useContext, useEffect } from 'react';
import Context from '../../context';
import ShareIcon from '../../images/shareIcon.svg';

function DoneRecipes() {
  const { setShowFooter, setPageName, setShowHeader } = useContext(Context);
  useEffect(() => {
    setShowHeader({
      showName: true,
      showSearch: false,
      showProfile: true,
    });
    setPageName('Done Recipes');
    setShowFooter(false);
  }, []);

  return (
    <section>
      <div>To com sede</div>
      <button type="button" data-testid="filter-by-food-btn">Food</button>
      <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <img src="" alt="" data-testid={ `${index}-horizontal-image` } />
      <p data-testid={ `${index}-horizontal-top-text` }>Categoria</p>
      <p data-testid={ `${index}-horizontal-name` }>Nome</p>
      <p data-testid={ `${index}-horizontal-done-date` }>Data</p>
      <button
        type="button"
        data-testid={ `${index}-horizontal-share-btn` }
      >
        <img src={ ShareIcon } alt="ShareIcon" />
      </button>
      <div data-testid={ `${index}-${tagName}-horizontal-tag` }>Receita</div>
    </section>
  );
}

export default DoneRecipes;
