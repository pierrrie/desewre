import Rain from "../Rain"; // Импортируйте компонент дождя
import HeaderBottom from "./headerBottom/headerBottom";
import HeaderMain from "./headerMain/HeaderMain";
import HeaderTop from "./headerTop/HeaderTop";

function Header() {
  return (
    <header style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Rain dropCount={300} />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <HeaderTop />
        <HeaderMain />
        <HeaderBottom />
      </div>
    </header>
  );
}

export default Header;
