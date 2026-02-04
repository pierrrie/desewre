import arrow from "../../image/arrow.svg";

interface BtnShowProps {
  children?: React.ReactNode; // добавляем поддержку children
  onClick: () => void;
}

function BtnPrice({ children, onClick }: BtnShowProps) {
  return (
    <button className="services__btn" onClick={onClick}>
      {children && <span className="btn-text">{children}</span>}
      <img src={arrow} alt={children ? String(children) : "Стрелка"} />
    </button>
  );
}

export default BtnPrice;