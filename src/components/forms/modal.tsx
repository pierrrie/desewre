import React, { useState } from "react";
import { sendToTelegram } from "../../api/telegram";
import { useNavigate } from "react-router-dom";

interface CloseModal {
    Close?: () => void;
}

function Modal({Close}: CloseModal) {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const serviceOptions = [
    "Разработать сайт",
    "Разработать дизайн",
    "Тех поддержка",
    "SEO",
    "Другое",
  ];
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedServices.length === 0) {
      alert("Пожалуйста, выберите хотя бы одну услугу");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const selectedServicesText = selectedServices.join(", ");

    const lid = `
    Новый лид:
    Имя: ${formData.get("name")},
    Телефон: ${formData.get("phone")},
    Способ связи: ${formData.get("social")},
    Услуги: ${selectedServicesText},
    Комментарий: ${formData.get("comment")},
    Бюджет: ${formData.get("price")}
    `;

    try {
      await sendToTelegram(lid);
      Close?.();
      navigate("/thank-you");
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      // Можно добавить уведомление об ошибке
    }
  }

  return (
    <div className="formLid__inner">
      <button onClick={Close} className="close-button" aria-label="Закрыть">
        <span className="close-icon">&times;</span>
      </button>

      <div className="formLid__text">
        <div className="formLid__title">
          Оставьте заявку, чтобы стать нашим клиентом
        </div>
        <div className="formLid__links">
          <a href="tel:+79923489131">+7 (992) 348-91-31</a>
          <a target="_blank" href="https://t.me/pierrrie">Телеграм аккаунт директора</a>
          <a target="_blank" href="https://t.me/desewreweb">Телеграм канал</a>
        </div>
      </div>
      <div className="formLid__form">
        <div className="form__title">Я хочу...</div>
        <div className="form__btns">
          {serviceOptions.map((service) => {
            const isSelected = selectedServices.includes(service);
            return (
              <button
                key={service}
                type="button"
                className={isSelected ? "active" : ""}
                aria-pressed={isSelected}
                onClick={() => {
                  if (isSelected) {
                    setSelectedServices(selectedServices.filter((item) => item !== service));
                  } else {
                    setSelectedServices([...selectedServices, service]);
                  }
                }}
              >
                {service}
              </button>
            );
          })}
        </div>
        <form className="lidForm" action="" onSubmit={handleSubmit}>
          <input type="hidden" name="service" value={selectedServices.join(", ")} />
          <input name="name" type="text" placeholder="Ваше имя" required />
          <input name="phone" type="tel" placeholder="Телефон" required />
          <input
            className="tel__desktop"
            name="social"
            type="text"
            placeholder="Напишите удобный способ связи (Telegram, почта, звонок и т.д)"
          />
          <input
            className="tel__mobile"
            name="social"
            type="text"
            placeholder="Напишите удобный способ связи"
          />
          <input name="comment" type="text" placeholder="Комментарий" />
          <input name="price" type="text" placeholder="Введите ваш бюджет" />
          <label className="policyForm">
            <div className="policyFormInput">
              <input name="accept" type="checkbox" required />
            </div>
            <div className="policyFormAccept">
              <span>Я даю</span>
              <a href="">Согласие</a>
              <span>
                на обработку моих персональных данных в соответствии с
              </span>
              <a href="">Политикой конфиденциальности</a>
            </div>
          </label>
          <input
            className="lidFormButton"
            type="submit"
            placeholder="Отправить"
          />
        </form>
      </div>
    </div>
  );
}

export default Modal;
