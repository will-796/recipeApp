import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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

  const history = useHistory();

  const email = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <p data-testid="profile-email">{email.email}</p>
      <button
        onClick={ () => history.push('/done-recipes') }
        type="button"
        data-testid="profile-done-btn"
      >
        Done Recipes

      </button>
      <button
        onClick={ () => history.push('/favorite-recipes') }
        type="button"
        data-testid="profile-favorite-btn"
      >
        Favorite Recipes

      </button>
      <button
        onClick={ handleLogout }
        type="button"
        data-testid="profile-logout-btn"
      >
        Logout

      </button>
    </div>
  );
}

export default Profile;
