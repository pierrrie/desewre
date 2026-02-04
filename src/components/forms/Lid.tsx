

interface LidBoolean {
    Open: boolean;
    Close: () => void;
}

function Lid({Open, Close}: LidBoolean) {


    if (!Open) {
        return null;
    }

  return (
    <div className="modal-backdrop">
        <div className="formLid__inner">
            <button onClick={Close} className="close-button" aria-label="Закрыть">
                <span className="close-icon">&times;</span>
            </button>
            
            <div className="formLid__text">
                <div className="formLid__title">
                    Оставьте заявку,
                    чтобы стать нашим
                    клиентом
                </div>
                <div className="formLid__links">
                    <a href="">+7 (982) 759-20-41</a>
                    <a href="">Телеграм аккаунт директора</a>
                    <a href="">Телеграм канал</a>
                </div>
            </div>
            <div className="formLid__form">
                <div className="form__title">
                    Я хочу...
                </div>
                <div className="form__btns">
                    <button>Разработать сайт</button>
                    <button>Разработать дизайн</button>
                    <button>Тех поддержка</button>
                    <button>SEO</button>
                </div>
                <form className="lidForm" action="">
                    <input name="name" type="text" placeholder="Ваше имя" required />
                    <input name="phone" type="tel" placeholder="Телефон" required />
                    <input name="social" type="text" placeholder="Напишите удобный способ связи (Telegram, почта, звонок и т.д)" />
                    <input name="comment" type="text" placeholder="Комментарий" />
                    <input name="price" type="text" placeholder="Выберите бюджет" />
                    <label className="policyForm">
                        <div className="policyFormInput">
                            <input name="accept" type="checkbox" required />
                        </div>
                        <div className="policyFormAccept">
                            <span>Я даю</span> 
                            <a href="">Согласие</a>
                            <span>на обработку моих персональных данных в соответствии с</span>
                            <a href="">Политикой конфиденциальности</a>
                        </div>
                    </label>
                    <input className="lidFormButton" type="submit" placeholder="Отправить" />
                </form>
            </div>
        </div>
    </div>
  );
}

export default Lid;