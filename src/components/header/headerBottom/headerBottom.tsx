import HeaderMessage from "./headerMessage";
import BtnShow from "../../btn/btnShow";


function HeaderBottom() {
  return (
    <div className="container">
        <div className="header__bottom_btn__inner">
            <div className="header__bottom__btn">
                <BtnShow>Узнать стоимость</BtnShow>
            </div>
            <HeaderMessage />
        </div>
    </div>
  );
}

export default HeaderBottom;
