import message from "../../../image/message.svg";


function HeaderMessage() {
  return (
      <div className="header__message__inner">
        <div className="header__message">
            <button>
                <img src={message} alt="Соц сети" />
            </button>
        </div>
      </div>
  );
}

export default HeaderMessage;
