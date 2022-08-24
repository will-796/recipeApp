import React, { useContext, useEffect } from 'react';
import Recipes from '../../components/Recipes/Recipes';
import Context from '../../context';

function Foods() {
  const { setShowFooter, setPageName, setShowHeader } = useContext(Context);

  useEffect(() => {
    setShowHeader({
      showName: true,
      showSearch: true,
      showProfile: true,
    });
    setShowFooter(true);
    setPageName('Foods');
    // eslint-disable-next-line
  }, []);

  return (
    <Recipes />
  );
}

export default Foods;
