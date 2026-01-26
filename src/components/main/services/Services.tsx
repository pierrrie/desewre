import arrow from "../../../image/arrow.svg";
import web from "../../../image/web.svg";
import design from "../../../image/design.svg";
import support from "../../../image/support.svg";
import seo from "../../../image/seo.svg";
import Btn from "../../btn/btnShow";

function Services() {
  return (
    <section className="services">
      <div className="services__inner">
        <div className="services__content">
          <h2 className="services__title">Услуги</h2>
          <p className="services__description">
            Мы используем последние технологии и методы, чтобы обеспечить нашим
            клиентам максимальное качество и результативность.
          </p>
          <Btn>Посмотреть все услуги</Btn>
        </div>
        <div className="services__cards">
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <div className="card__title">
                  <img src={web} alt="код" />
                  <div className="card__title--text">Web-разработка</div>
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
                  <div className="card__title--text">Web-разработка</div>
                </div>
                <div className="card__content">
                  <p>Разрабатываем сайты персонально под ваш бизнес.</p>
                  <p>
                    Создаём web-сервисы для любого направления бизнеса: продажи,
                    коммуникации, управление, серверную часть и API, гибкие
                    административные инструменты для управления приложениями и
                    сбора статистики.
                  </p>
                  <p>
                    Вы получаете продукт, привлекательный для пользователей и
                    функциональный для вас.
                  </p>
                </div>
                <div className="card__btn">
                  <button>Узнать стоимость</button>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <div className="card__title">
                  <img src={design} alt="дизайн" />
                  <div className="card__title--text">Дизайн</div>
                </div>
                <div className="card__list">
                  <ul>
                    <li>Дизайн сайтов и лендингов</li>
                    <li>UX/UI дизайн интерфейсов</li>
                    <li>Фирменный стиль и брендинг</li>
                    <li>Дизайн мобильных приложений</li>
                  </ul>
                </div>
                <div className="card__utp">
                  визуальная коммуникация, которая увеличивает конверсию
                </div>
              </div>
              <div className="card-back">
                <div className="card__title">
                  <img src={design} alt="дизайн" />
                  <div className="card__title--text">Дизайн</div>
                </div>
                <div className="card__content">
                  <p>
                    Создаём продуманные визуальные решения, которые решают
                    бизнес-задачи.
                  </p>
                  <p>
                    Разрабатываем пользовательские интерфейсы (UI), которые
                    интуитивно понятны и удобны. Проектируем пользовательский
                    опыт (UX), чтобы каждая встреча с продуктом была логичной и
                    приятной.
                  </p>
                  <p>
                    Мы делаем дизайн, который не только красив, но и работает на
                    ваши цели — привлекает клиентов, повышает лояльность и
                    увеличивает продажи.
                  </p>
                </div>
                <div className="card__btn">
                  <button>Узнать стоимость</button>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <div className="card__title">
                  <img src={seo} alt="поисковая оптимизация" />
                  <div className="card__title--text">SEO</div>
                </div>
                <div className="card__list">
                  <ul>
                    <li>Аудит и аналитика сайта</li>
                    <li>Техническая оптимизация</li>
                    <li>Работа с контентом и ссылками</li>
                    <li>Мониторинг позиций и трафика</li>
                  </ul>
                </div>
                <div className="card__utp">
                  стабильный рост позиций и целевого трафика из поиска
                </div>
              </div>
              <div className="card-back">
                <div className="card__title">
                  <img src={seo} alt="поисковая оптимизация" />
                  <div className="card__title--text">SEO</div>
                </div>
                <div className="card__content">
                  <p>
                    Комплексная поисковая оптимизация для роста видимости вашего
                    сайта.
                  </p>
                  <p>
                    Проводим глубокий аудит, устраняем технические ошибки,
                    оптимизируем структуру и контент. Наши методы соответствуют
                    рекомендациям поисковых систем.
                  </p>
                  <p>
                    Результат — рост позиций по ключевым запросам, увеличение
                    целевого органического трафика и, как следствие, больше
                    заявок и продаж для вашего бизнеса.
                  </p>
                </div>
                <div className="card__btn">
                  <button>Узнать стоимость</button>
                </div>
              </div>
            </div>
          </div>

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
                  <button>Узнать стоимость</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
