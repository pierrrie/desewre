import { Link } from "react-router-dom";
import logo from "../image/logo.svg";

function ThankYou() {
  return (
    <div className="thank-you-page">
      <div className="container">
        <div className="thank-you-content">
          <div className="thank-you-icon">
            <img src={logo} alt="" />
          </div>
          <h1 className="thank-you-title">Спасибо за обращение!</h1>
          <p className="thank-you-text">
            Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
          </p>
          <div className="thank-you-actions">
            <Link to="/" className="thank-you-button primary">
              Вернуться на главную
            </Link>
            <Link to="/contacts" className="thank-you-button secondary">
              Посмотреть контакты
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;