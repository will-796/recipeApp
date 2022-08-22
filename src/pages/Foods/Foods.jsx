import React, { useContext, useEffect } from 'react';
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
  }, []);

  return (
    <div>To com fome</div>);
}

export default Foods;
