import React, { useContext, useEffect } from 'react';
import Context from '../../context';

function DrinksId() {
  const { setShowFooter, setPageName, setShowHeader } = useContext(Context);
  useEffect(() => {
    setShowHeader({
      showName: true,
      showSearch: true,
      showProfile: true,
    });
    setPageName('Drinks');
    setShowFooter(false);
  }, []);

  return (
    <div>To com sede</div>
  );
}

export default DrinksId;
