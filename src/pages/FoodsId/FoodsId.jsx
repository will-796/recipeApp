import React, { useContext, useEffect } from 'react';
import Context from '../../context';

function FoodsId() {
  const { setShowFooter, setPageName, setShowHeader } = useContext(Context);
  useEffect(() => {
    setShowHeader({
      showName: true,
      showSearch: true,
      showProfile: true,
    });
    setPageName('Foods');
    setShowFooter(false);
  }, []);

  return (
    <div>To com fome</div>);
}

export default FoodsId;
