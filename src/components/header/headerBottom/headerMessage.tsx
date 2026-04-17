import message from "../../../image/message.svg";
import telegram from "../../../image/telegram.svg";
import vk from "../../../image/vk.svg";
import mail from "../../../image/mail.svg";
import phone from "../../../image/phone.svg";
import { useState } from 'react';

function HeaderMessage() {

  const [btnIsOpen, btnSetIsOpen] = useState(false);

  const handleBtnToggle = () => {
    btnSetIsOpen(!btnIsOpen);
  };


  const [ modalIsOpen, modalSetIsOpen ] = useState(false);

  const handleModalToggle = () => {
    modalSetIsOpen(!modalIsOpen);
  }

  const handleCloseModal = () => {
    modalSetIsOpen(false);
  };


  return (
      <div className="header__message__section">
        {modalIsOpen && (
          <div className="backdrop-blur">
          <div className="header__message__socials--mobile">
            <span onClick={handleCloseModal} className="close-icon close-button">×</span>
            <div className="header__btns__mobile">
              <a href="tel:+79923489131">
                <img src={phone} alt="phone" />
              </a>
              <a href="mailto:desewre@yandex.ru">
                <img src={mail} alt="mail" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://vk.com/pierrie">
                <img src={vk} alt="vk" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://t.me/pierrrie">
                <img src={telegram} alt="telegram" />
              </a>
            </div>
          </div>
        </div>
        )}
        <div className={`header__message__inner ${btnIsOpen ? 'active' : ''}`}>
          <div className="header__message__socials">
            <a href="tel:+79923489131">
                <img src={phone} alt="phone" />
            </a>
            <a href="mailto:desewre@yandex.ru">
              <img src={mail} alt="mail" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://vk.com/pierrie">
              <img src={vk} alt="vk" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://t.me/pierrrie">
              <img src={telegram} alt="telegram" />
            </a>
          </div>
          <div className="header__message">
            {!btnIsOpen ? (
              <button onClick={handleBtnToggle}>
                  <img src={message} alt="Соц сети" />
              </button>
            ) : (
              <button className="btn__Close" onClick={handleBtnToggle}>
                  <div className="close"></div>
              </button>
            )}
          </div>
        </div>
        <div className="header__message header__message--mobile" onClick={handleModalToggle}>
              <button>
                  <img src={message} alt="Соц сети" />
              </button>
          </div>
      </div>
  );
}

export default HeaderMessage;
