import Rain from "../Rain"; 
import HeaderBottom from "./headerBottom/headerBottom";
import HeaderMain from "./headerMain/HeaderMain";
import HeaderTop from "./headerTop/HeaderTop";
import Menu from "./menu/menu";

interface onOpen {
  onOpen: () => void;
}

function Header({onOpen}: onOpen) {
  
  return (
    <header style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Rain dropCount={300} />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Menu />
        <HeaderTop onOpen={onOpen} />
        <HeaderMain />
        <HeaderBottom onOpen={onOpen} />
      </div>
    </header>
  );
}

export default Header;
