import React, { useContext } from 'react';
import Context from '../context';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';

function Footer() {
  const { showFooter } = useContext(Context);

  return (
    <div>
      {showFooter && (
        <footer id="footer" data-testid="footer">
          <a href="/drinks">
            <img
              data-testid="drinks-bottom-btn"
              src={ drinkIcon }
              alt="drink icon"
            />
          </a>
          <a href="/foods">
            <img data-testid="food-bottom-btn" src={ mealIcon } alt="meal icon" />
          </a>
        </footer>
      )}
    </div>
  );
}

export default Footer;
