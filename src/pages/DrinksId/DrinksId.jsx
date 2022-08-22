import React, { useContext, useEffect } from 'react';
import Context from '../../context';

function Drinks() {
  const { setPageName, setShowHeader } = useContext(Context);
  useEffect(() => {
    setShowHeader({
      showName: true,
      showSearch: true,
      showProfile: true,
    });
    setPageName('Drinks');
  }, []);

  return (
    <div>To com sede</div>
  );
}

export default Drinks;
