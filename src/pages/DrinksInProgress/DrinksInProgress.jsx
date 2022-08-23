import React, { useContext, useEffect } from 'react';
import Context from '../../context';

function DrinksInProgress() {
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

export default DrinksInProgress;
