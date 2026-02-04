import HeaderMessage from "./headerMessage";
import BtnPrice from "../../btn/btnPrice";

interface HeaderBottomProps {
  onOpen: () => void;
}


function HeaderBottom({onOpen}: HeaderBottomProps) {
  return (
    <div className="container">
        <div className="header__bottom_btn__inner">
            <div className="header__bottom__btn">
                <BtnPrice onClick={onOpen}>Узнать стоимость</BtnPrice>
            </div>
            <HeaderMessage />
        </div>
    </div>
  );
}

export default HeaderBottom;
