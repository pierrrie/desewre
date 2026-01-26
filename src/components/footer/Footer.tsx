import Logo from "../../image/logo-footer.svg";
import desewre from "../../image/desewre.svg";
import phone from "../../image/phone.svg";
import mail from "../../image/mail.svg";
import telegram from "../../image/telegram.svg";
import sms from "../../image/sms.svg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" aria-label="Подвал сайта">
      <div className="container">
        <div className="footer__inner">
          {/* Верхняя часть футера */}
          <div className="footer__top">
            {/* Логотип и контакты */}
            <div className="footer__logo">
              <div className="footer__img">
                <a href="/" aria-label="Перейти на главную страницу">
                  <img src={Logo} alt="Логотип компании" />
                  <img className='logo-footer' src={desewre} alt="Название компании Desewre" />
                </a>
              </div>
              <div className="footer__contact">
                <div className="footer__number">
                  <img src={phone} alt="" aria-hidden="true" />
                  <a href="tel:+78005117468" aria-label="Позвонить по номеру +7 800 511-74-68">
                    +7 (800) 511-74-68
                  </a>
                </div>
                <div className="footer__number">
                  <img src={mail} alt="" aria-hidden="true" />
                  <a href="mailto:Desewre@yandex.ru" aria-label="Написать на электронную почту Desewre@yandex.ru">
                    Desewre@yandex.ru
                  </a>
                </div>
              </div>
            </div>

            {/* Навигация */}
            <nav className="footer__info" aria-label="Дополнительная навигация">
              <div className="footer__info--list">
                <h3 className="footer__list--title">Разделы</h3>
                <ul>
                  <li><a href="/" aria-label="Перейти на главную страницу">Главная</a></li>
                  <li><a href="/about" aria-label="Перейти на страницу о компании">О нас</a></li>
                  <li><a href="/cases" aria-label="Перейти к кейсам">Кейсы</a></li>
                  <li><a href="/services" aria-label="Перейти к услугам">Услуги</a></li>
                </ul>
              </div>
              <div className="footer__info--list">
                <h3 className="footer__list--title">Компания</h3>
                <ul>
                  <li><a href="/contacts" aria-label="Перейти к контактам">Контакты</a></li>
                  <li><a href="/faq" aria-label="Перейти к часто задаваемым вопросам">FAQ</a></li>
                </ul>
              </div>
              <div className="footer__info--list">
                <h3 className="footer__list--title">Информация</h3>
                <ul>
                  <li><a href="/privacy-policy" aria-label="Перейти к политике конфиденциальности">Политика конфиденциальности</a></li>
                  <li><a href="/user-agreement" aria-label="Перейти к пользовательскому соглашению">Пользовательское соглашение</a></li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Нижняя часть футера */}
          <div className="footer__bottom">
            <hr aria-hidden="true" />
            <div className="footer__btn__socials">
              <a 
                href="https://t.me/desewreweb" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                aria-label="Наш канал в Telegram"
              >
                <img src={telegram} alt="Telegram" />
              </a>
              <a 
                href="mailto:Desewre@yandex.ru" 
                aria-label="Написать нам по электронной почте"
              >
                <img src={sms} alt="Электронная почта" />
              </a>
            </div>
          </div>

          {/* Копирайт */}
          <div className="footer__copyright" role="contentinfo">
            Copyright ©{currentYear} Desewre. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;