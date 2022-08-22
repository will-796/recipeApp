import React, { useContext, useEffect } from 'react';
import Context from '../../context';

function Recipes() {
  const { setPageName, setShowHeader } = useContext(Context);
  useEffect(() => {
    setShowHeader({
      showName: true,
      showSearch: true,
      showProfile: true,
    });
    setPageName('Foods');
  }, []);

  return (
    <div>To com fome</div>);
}

export default Recipes;
