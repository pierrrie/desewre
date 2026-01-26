import arrow from "../../image/arrow.svg";

interface BtnShowProps {
  children?: React.ReactNode; // добавляем поддержку children
}

function BtnShow({ children }: BtnShowProps) {
  return (
    <button className="services__btn">
      {children && <span className="btn-text">{children}</span>}
      <img src={arrow} alt={children ? String(children) : "Стрелка"} />
    </button>
  );
}

export default BtnShow;