import auto from "../image/auto.svg";
import Cases from "../components/main/cases/Cases";
import FormMain from "../components/main/form/formMain";

interface onOpen {
    onOpen: () => void;
}

function AutoServices({onOpen}: onOpen) {
  return (
    <>
      <div className="container">
        <div className="WebService__inner">
          <div className="WebService__top">
            <div className="WebService__title">
              <h1>АВТОМАТИЗАЦИЯ БИЗНЕСА</h1>
              <p>
                Внедряем системы автоматизации для оптимизации бизнес-процессов.
                Помогаем сократить рутинные задачи и повысить эффективность работы.
              </p>
              <p>
                Мы анализируем ваши бизнес-процессы и предлагаем решения,
                которые автоматизируют рутину, улучшают коммуникацию и
                повышают общую эффективность компании.
              </p>
            </div>
            <div className="WebService__card">
              <div className="services__pages__card">
                <div className="services__pages__card">
                  <div className="card">
                    <div className="card-inner">
                      <div className="card-front">
                        <div className="card__title">
                          <img src={auto} alt="автоматизация" />
                          <div className="card__title--text">Автоматизация бизнеса</div>
                        </div>
                        <div className="card__list">
                          <ul>
                            <li>Интеграция CRM и ERP систем</li>
                            <li>Сквозная аналитика</li>
                            <li>Чат-боты и автоответчики</li>
                            <li>Бизнес-процессы</li>
                          </ul>
                        </div>
                        <div className="card__utp">
                          цифровые решения для оптимизации ваших бизнес-процессов
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="card__title">
                          <img src={auto} alt="автоматизация" />
                          <div className="card__title--text">Автоматизация бизнеса</div>
                        </div>
                        <div className="card__content">
                          <p>
                            Превращаем рутинные задачи в автоматизированные процессы,
                            экономя ваше время и ресурсы.
                          </p>
                          <p>
                            Интегрируем CRM, системы сквозной аналитики и другие
                            инструменты. Настраиваем чат-ботов для
                            обработки заявок, автоматизируем коммуникацию с клиентами и
                            внутренние бизнес-процессы.
                          </p>
                          <p>
                            Результат — снижение затрат, повышение
                            эффективности сотрудников и рост качества обслуживания
                            клиентов.
                          </p>
                        </div>
                        <div className="card__btn">
                          <button onClick={onOpen}>Узнать стоимость</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="WebServices__bottom">
            <div className="WebServices__bottom__title">
                Что мы можем сделать для вас
            </div>
            <div className="WebServices__bottom__description">
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Интеграция CRM систем
                    </div>
                    <div className="WebServices__content__text">
                        Подключаем и настраиваем системы управления отношениями
                        с клиентами, автоматизируем сбор данных о клиентах,
                        обработку заявок и маркетинговые кампании.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Чат-боты и автоответчики
                    </div>
                    <div className="WebServices__content__text">
                        Создаём интеллектуальных помощников для обработки
                        обращений клиентов, автоматических ответов на частые
                        вопросы и квалификации лидов.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Сквозная аналитика
                    </div>
                    <div className="WebServices__content__text">
                        Настраиваем системы отслеживания эффективности маркетинга,
                        продаж и бизнес-процессов от первого контакта до
                        завершения сделки.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Автоматизация процессов
                    </div>
                    <div className="WebServices__content__text">
                        Оптимизируем внутренние бизнес-процессы, автоматизируем
                        рутинные задачи, интегрируем различные системы для
                        бесшовного обмена данными.
                    </div>
                </div>
            </div>
          </div>
        <Cases />
        <FormMain onOpen={onOpen}/>
        </div>
      </div>
    </>
  );
}

export default AutoServices;