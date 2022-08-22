import React, { useContext, useEffect } from 'react';
import Context from '../../context';

function Profile() {
  const { setShowFooter, setPageName, setShowHeader } = useContext(Context);
  useEffect(() => {
    setShowHeader({
      showName: true,
      showSearch: false,
      showProfile: true,
    });
    setPageName('Profile');
    setShowFooter(true);
  }, []);

  return (
    <div>To com sede</div>
  );
}

export default Profile;
