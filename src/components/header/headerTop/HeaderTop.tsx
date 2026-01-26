function HeaderTop() {
  return (
    <div className="header__top">
      <div className="header__top__inner">
        <div className="header__menu">
          <div></div>
          <div></div>
          <div></div>
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
          <button>Начните свой проект</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
