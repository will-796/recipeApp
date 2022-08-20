import React, { useContext, useEffect } from 'react';
import Context from '../../context';

function FavoriteRecipes() {
  const { setPageName, setShowHeader } = useContext(Context);
  useEffect(() => {
    setShowHeader({
      showName: true,
      showSearch: false,
      showProfile: true,
    });
    setPageName('Favorite Recipes');
  }, []);

  return (
    <div>To com sede</div>
  );
}

export default FavoriteRecipes;
