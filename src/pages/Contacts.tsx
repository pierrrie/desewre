import Modal from "../components/forms/modal";

function Contacts() {
  return (
    <>
      <div className="container">
        <div className="contacts">
          <div className="contacts__inner">
            <h1>Контакты</h1>
            <div className="contacts__content">
              <p>Свяжитесь с нами любым удобным способом или оставьте заявку</p>
            </div>
            <hr />
          </div>
          <div className="contacts__Form">
            <Modal />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
