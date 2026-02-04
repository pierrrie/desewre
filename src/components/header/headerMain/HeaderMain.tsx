import Logo from "../../../image/logo.svg";
import Desewre from "../../../image/desewre2.svg";

function HeaderMain() {
  return (
    <div className="header__main">
      <div className="header__main__inner">
        <div className="header__inner__logo">
          <img className="logo-header" src={Logo} alt="Лого" />
          <img className="logo-header-text" src={Desewre} alt="Desewre" />
        </div>
        <div className="header__inner__text">
          <span>
            Дизайн и разработка сайта отражающий характер вашего бренда
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
