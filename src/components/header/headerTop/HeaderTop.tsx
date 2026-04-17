import Logo from "../../../image/logo-footer.svg";
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface onOpenModal {
  onOpen: () => void;
}

function HeaderTop({ onOpen }: onOpenModal) {

  const [ burgerOpen, burgerSetOpen ] = useState(false);

  const handleBurgerToggle = () => {
    burgerSetOpen(!burgerOpen);
  }

  const handleCloseMenu = () => {
    burgerSetOpen(false);
  }

  return (
    <div className="container">
      <div className="header__top">
        <div className="header__top__inner">
          {/* Бургер-меню показывается только когда меню закрыто */}
          {!burgerOpen && (
            <div className="header__menu--mobile" onClick={handleBurgerToggle}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
          
          {/* Крестик показывается только когда меню открыто */}
          {burgerOpen && (
            <div className="header__menu--mobile__close" onClick={handleBurgerToggle}>
              <div className="close-line close-line-1"></div>
              <div className="close-line close-line-2"></div>
            </div>
          )}
          
          {/* Затемнение фона - появляется при открытии меню */}
          {burgerOpen && (
            <div className="header__overlay" onClick={handleCloseMenu}></div>
          )}
          
          <div className={`header__menu__nav__mobile ${burgerOpen ? 'active' : ''}`}>
            <nav className="header__nav--mobile">
              <ul>
                {/* <li>
                  <a href="/#about">О нас</a>
                </li> */}
                <li>
                  <Link to="/services" onClick={handleCloseMenu}>Услуги</Link>
                </li>
                <li>
                  <Link to="/cases" onClick={handleCloseMenu}>Проекты</Link>
                </li>
                <li>
                  <Link to="/faq" onClick={handleCloseMenu}>FAQ</Link>
                </li>
                <li>
                  <Link to="/contacts" onClick={handleCloseMenu}>Контакты</Link>
                </li>
              </ul>
            </nav>
            <div className="header__btn--mobile">
              <button onClick={() => { onOpen(); handleCloseMenu(); }}>Начните свой проект</button>
            </div>
          </div>
          <div className="header__menu header__menu--desktop">
            <Link to="/">
              <img src={Logo} alt="Лого" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul>
              {/* <li>
                <a href="/#about">О нас</a>
              </li> */}
              <li>
                <Link to="/services">Услуги</Link>
              </li>
              <li>
                <Link to="/cases">Проекты</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contacts">Контакты</Link>
              </li>
            </ul>
          </nav>
          <div className="header__btn">
            <button onClick={onOpen}>Начните свой проект</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;