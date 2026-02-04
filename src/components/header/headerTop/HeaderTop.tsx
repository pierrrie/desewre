import Logo from "../../../image/logo-footer.svg";
import { useState } from 'react';

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
              <li>
                <a href="" onClick={handleCloseMenu}>О нас</a>
              </li>
              <li>
                <a href="" onClick={handleCloseMenu}>Услуги</a>
              </li>
              <li>
                <a href="" onClick={handleCloseMenu}>Проекты</a>
              </li>
              <li>
                <a href="" onClick={handleCloseMenu}>Контакты</a>
              </li>
            </ul>
          </nav>
          <div className="header__btn--mobile">
            <button onClick={() => { onOpen(); handleCloseMenu(); }}>Начните свой проект</button>
          </div>
        </div>
        <div className="header__menu header__menu--desktop">
          <a href="/">
            <img src={Logo} alt="Лого" />
          </a>
        </div>
        <nav className="header__nav">
          <ul>
            <li>
              <a href="">О нас</a>
            </li>
            <li>
              <a href="">Услуги</a>
            </li>
            <li>
              <a href="">Проекты</a>
            </li>
            <li>
              <a href="">Контакты</a>
            </li>
          </ul>
        </nav>
        <div className="header__btn">
          <button onClick={onOpen}>Начните свой проект</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;