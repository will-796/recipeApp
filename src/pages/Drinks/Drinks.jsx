import React, { useContext, useEffect } from 'react';
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
  }, []);

  return (
    <div>To com sede</div>
  );
}

export default Drinks;
