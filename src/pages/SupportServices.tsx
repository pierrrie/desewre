import support from "../image/support.svg";
import Cases from "../components/main/cases/Cases";
import FormMain from "../components/main/form/formMain";

interface onOpen {
    onOpen: () => void;
}

function SupportServices({onOpen}: onOpen) {
  return (
    <>
      <div className="container">
        <div className="WebService__inner">
          <div className="WebService__top">
            <div className="WebService__title">
              <h1>ТЕХНИЧЕСКАЯ ПОДДЕРЖКА</h1>
              <p>
                Обеспечиваем стабильную работу ваших онлайн-ресурсов.
                Предоставляем поддержку и оперативное решение технических вопросов.
              </p>
              <p>
                Мы берём на себя все технические заботы, чтобы вы могли
                сосредоточиться на развитии бизнеса. От мониторинга до
                экстренного реагирования — ваш сайт всегда работает.
              </p>
            </div>
            <div className="WebService__card">
              <div className="services__pages__card">
                <div className="services__pages__card">
                  <div className="card">
                    <div className="card-inner">
                      <div className="card-front">
                        <div className="card__title">
                          <img src={support} alt="техподдержка" />
                          <div className="card__title--text">Техническая поддержка</div>
                        </div>
                        <div className="card__list">
                          <ul>
                            <li>Оперативное устранение сбоев</li>
                            <li>Регулярное обновление и безопасность</li>
                            <li>Консультации и добавление нового функционала</li>
                            <li>Резервное копирование данных</li>
                          </ul>
                        </div>
                        <div className="card__utp">
                          ваш сайт работает стабильно, пока вы занимаетесь бизнесом
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="card__title">
                          <img src={support} alt="техподдержка" />
                          <div className="card__title--text">Техническая поддержка</div>
                        </div>
                        <div className="card__content">
                          <p>
                            Полный спектр услуг по поддержке и развитию вашего
                            веб-ресурса.
                          </p>
                          <p>
                            Мы берём на себя все технические заботы: мониторинг
                            работоспособности, своевременное обновление систем и
                            модулей, обеспечение безопасности, быстрое реагирование на
                            любые неполадки.
                          </p>
                          <p>
                            Вы получаете уверенность в стабильной работе вашего
                            онлайн-актива и свободу для фокусировки на ключевых
                            бизнес-процессах.
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
                        Мониторинг и обслуживание
                    </div>
                    <div className="WebServices__content__text">
                        Круглосуточный мониторинг работоспособности сайта,
                        регулярные проверки безопасности и производительности,
                        своевременное обновление компонентов.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Техническая поддержка
                    </div>
                    <div className="WebServices__content__text">
                        Быстрое реагирование на любые технические проблемы,
                        устранение сбоев, восстановление работоспособности,
                        консультации по техническим вопросам.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Резервное копирование
                    </div>
                    <div className="WebServices__content__text">
                        Регулярное создание резервных копий данных, файлов и
                        баз данных, безопасное хранение и возможность быстрого
                        восстановления в случае необходимости.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Развитие и оптимизация
                    </div>
                    <div className="WebServices__content__text">
                        Добавление нового функционала, оптимизация производительности,
                        улучшение пользовательского опыта, консультации по
                        техническому развитию проекта.
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

export default SupportServices;