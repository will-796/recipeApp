import React, { useContext } from 'react';
import Context from '../context';
import SearchIcon from '../images/searchIcon.svg';
import ProfileIcon from '../images/profileIcon.svg';

function Header() {
  const { pageName,
    showHeader: { showName, showSearch, showProfile } } = useContext(Context);
  return (
    <div>
      <header>
        { showName && <h1 data-testid="page-title">{ pageName }</h1> }
        { showSearch && (
          <img src={ SearchIcon } alt="SearchIcon" data-testid="search-top-btn" />
        )}
        { showProfile && (

          <img src={ ProfileIcon } alt="Profile" data-testid="profile-top-btn" />
        )}
      </header>
    </div>
  );
}

export default Header;
