import web from "../image/web.svg";
import Cases from "../components/main/cases/Cases";
import FormMain from "../components/main/form/formMain";

interface onOpen {
    onOpen: () => void;
}

function WebServices({onOpen}: onOpen) {
  return (
    <>
      <div className="container">
        <div className="WebService__inner">
          <div className="WebService__top">
            <div className="WebService__title">
              <h1>WEB РАЗРАБОТКА</h1>
              <p>
                Мы используем только современные технологии и инструменты
                разработки, такие как HTML, CSS, JavaScript, PHP, React,
                TypeScript и другие. Это позволяет нам создавать веб-приложения,
                которые не только отвечают потребностям наших клиентов, но и
                соответствуют самым высоким стандартам безопасности и качества.
              </p>
              <p>
                Убеждены, что ключевой фактор успеха любого веб-проекта - это
                тесное сотрудничество между заказчиком и исполнителем. Поэтому
                мы уделяем особое внимание пониманию потребностей наших клиентов
                и обеспечиваем полную прозрачность их выполнения проекта.
              </p>
            </div>
            <div className="WebService__card">
              <div className="services__pages__card">
                <div className="services__pages__card">
                  <div className="card">
                    <div className="card-inner">
                      <div className="card-front">
                        <div className="card__title">
                          <img src={web} alt="код" />
                          <div className="card__title--text">
                            Web-разработка
                          </div>
                        </div>
                        <div className="card__list">
                          <ul>
                            <li>Интерактив</li>
                            <li>Адаптивность</li>
                            <li>Интерфейсы</li>
                            <li>Интеграция CRM</li>
                          </ul>
                        </div>
                        <div className="card__utp">
                          сайты любой сложности, под ваши цели и задачи
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="card__title">
                          <img src={web} alt="код" />
                          <div className="card__title--text">
                            Web-разработка
                          </div>
                        </div>
                        <div className="card__content">
                          <p>Разрабатываем сайты персонально под ваш бизнес.</p>
                          <p>
                            Создаём web-сервисы для любого направления бизнеса:
                            продажи, коммуникации, управление, серверную часть и
                            API, гибкие административные инструменты для
                            управления приложениями и сбора статистики.
                          </p>
                          <p>
                            Вы получаете продукт, привлекательный для
                            пользователей и функциональный для вас.
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
                        Landing Page
                    </div>
                    <div className="WebServices__content__text">
                        Сайт, созданный с целью привлечения потенциальных клиентов или продажи конкретного продукта или услуги. Мы предоставляем услуги по разработке лендингов, которые соответствуют вашим потребностям и помогут увеличить конверсию.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Интернет-магазин
                    </div>
                    <div className="WebServices__content__text">
                        Веб-сайт, предназначенный для продажи товаров и услуг через Интернет. Мы создаем эффективные интернет-магазины с интуитивно понятным интерфейсом, а также интегрируем удобные и безопасные системы онлайн-оплаты и доставки.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Сайт - визитка
                    </div>
                    <div className="WebServices__content__text">
                        Небольшой сайт, который представляет ваш бизнес и информирует потенциальных клиентов о ваших продуктах и услугах. Мы создаем сайты-визитки, которые эффективно передают ваше сообщение и помогают увеличить вашу онлайн-присутствие.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Корпоративный сайт
                    </div>
                    <div className="WebServices__content__text">
                        Веб-сайт, предназначенный для представления компании, ее продуктов и услуг, а также для общения с клиентами и партнерами. Мы создаем корпоративные сайты, которые эффективно отображают вашу бренд-идентичность и помогают укрепить ваше положение на рынке.
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

export default WebServices;
