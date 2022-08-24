import React, { useContext, useEffect } from 'react';
import Recipes from '../../components/Recipes/Recipes';
import Context from '../../context';

function Drinks() {
  const { setShowFooter, setPageName, setShowHeader } = useContext(Context);

  useEffect(() => {
    setShowHeader({
      showName: true,
      showSearch: true,
      showProfile: true,
    });
    setPageName('Drinks');
    setShowFooter(true);
    // eslint-disable-next-line
  }, []);

  return (
    <Recipes />
  );
}

export default Drinks;
