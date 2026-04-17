import marketing from "../image/marketing.svg";
import Cases from "../components/main/cases/Cases";
import FormMain from "../components/main/form/formMain";

interface onOpen {
    onOpen: () => void;
}

function MarketingServices({onOpen}: onOpen) {
  return (
    <>
      <div className="container">
        <div className="WebService__inner">
          <div className="WebService__top">
            <div className="WebService__title">
              <h1>ИНТЕРНЕТ-МАРКЕТИНГ</h1>
              <p>
                Разрабатываем и реализуем стратегии продвижения в цифровой среде.
                Используем современные инструменты маркетинга для привлечения
                клиентов и увеличения продаж.
              </p>
              <p>
                Наша работа — это комплексный подход: от анализа аудитории и
                конкурентов до запуска кампаний и анализа результатов. Мы
                фокусируемся на ROI и реальных бизнес-результатах.
              </p>
            </div>
            <div className="WebService__card">
              <div className="services__pages__card">
                <div className="services__pages__card">
                  <div className="card">
                    <div className="card-inner">
                      <div className="card-front">
                        <div className="card__title">
                          <img src={marketing} alt="интернет маркетинг" />
                          <div className="card__title--text">Интернет-маркетинг</div>
                        </div>
                        <div className="card__list">
                          <ul>
                            <li>Контекстная и таргетированная реклама</li>
                            <li>SMM продвижение в соцсетях</li>
                            <li>Email-маркетинг и CRM</li>
                            <li>Аналитика и оптимизация кампаний</li>
                          </ul>
                        </div>
                        <div className="card__utp">
                          комплексное продвижение для привлечения клиентов и роста продаж
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="card__title">
                          <img src={marketing} alt="интернет маркетинг" />
                          <div className="card__title--text">Интернет-маркетинг</div>
                        </div>
                        <div className="card__content">
                          <p>
                            Привлекаем целевую аудиторию и увеличиваем продажи через
                            цифровые каналы.
                          </p>
                          <p>
                            Настраиваем рекламные кампании в Яндекс.Директ, Google Ads,
                            социальных сетях. Разрабатываем стратегии SMM, создаём
                            вовлекающий контент.
                            Внедряем системы сквозной аналитики для контроля
                            эффективности.
                          </p>
                          <p>
                            Наша цель — не просто трафик, а реальные заявки и продажи
                            при оптимальном бюджете.
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
                        Контекстная реклама
                    </div>
                    <div className="WebServices__content__text">
                        Настраиваем кампании в Яндекс.Директ и Google Ads,
                        которые показывают объявления целевой аудитории в
                        момент поиска товаров или услуг.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        SMM продвижение
                    </div>
                    <div className="WebServices__content__text">
                        Разрабатываем контент-стратегии для социальных сетей,
                        ведём аккаунты, запускаем таргетированную рекламу и
                        взаимодействуем с аудиторией.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Email-маркетинг
                    </div>
                    <div className="WebServices__content__text">
                        Создаём персонализированные рассылки, сегментируем
                        аудиторию и автоматизируем коммуникации для
                        удержания клиентов и повторных продаж.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Аналитика и оптимизация
                    </div>
                    <div className="WebServices__content__text">
                        Настраиваем системы аналитики, отслеживаем KPI,
                        анализируем эффективность кампаний и оптимизируем
                        бюджеты для максимального ROI.
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

export default MarketingServices;