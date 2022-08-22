import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context';
import SearchIcon from '../images/searchIcon.svg';
import ProfileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar/SearchBar';

function Header() {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const { pageName,
    showHeader: { showName, showSearch, showProfile } } = useContext(Context);

  const history = useHistory();

  const handleProfile = () => {
    history.push('/profile');
  };

  const handleSearch = () => {
    setShowSearchInput((prev) => !prev);
  };

  return (
    <div>
      <header>
        <SearchBar />
        { showName && <h1 data-testid="page-title">{ pageName }</h1> }
        { showSearch && (
          <button
            type="button"
            onClick={ handleSearch }
          >
            <img src={ SearchIcon } alt="SearchIcon" data-testid="search-top-btn" />
          </button>
        )}
        { showSearchInput && (
          <input data-testid="search-input" />
        )}
        { showProfile && (
          <button
            type="button"
            onClick={ handleProfile }
          >
            <img
              src={ ProfileIcon }
              alt="Profile"
              data-testid="profile-top-btn"
            />
          </button>
        )}
      </header>
    </div>
  );
}

export default Header;
