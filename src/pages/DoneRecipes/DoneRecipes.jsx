import React, { useContext, useEffect } from 'react';
import Context from '../../context';

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
    <div>To com sede</div>
  );
}

export default DoneRecipes;
