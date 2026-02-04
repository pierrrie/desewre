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


  return (
      <div className="header__message__section">
        <div className={`header__message__inner ${btnIsOpen ? 'active' : ''}`}>
          <div className="header__message__socials">
            <button name="phone">
              <img src={phone} alt="phone" />
            </button>
            <button name="mail">
              <img src={mail} alt="mail" />
            </button>
            <button name="vk">
              <img src={vk} alt="vk" />
            </button>
            <button name="telegram">
              <img src={telegram} alt="telegram" />
            </button>
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
      </div>
  );
}

export default HeaderMessage;
