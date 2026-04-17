import web from "../../../image/web.svg";
import design from "../../../image/design.svg";
import support from "../../../image/support.svg";
import seo from "../../../image/seo.svg";
import Btn from "../../btn/btnShow";
import { Link } from "react-router-dom"
// import marketing from "../../../image/web.svg";
// import mobile from "../../../image/web.svg";
// import content from "../../../image/web.svg";
// import automation from "../../../image/web.svg";

interface onOpen {
  onOpen: () => void;
}

function Services({ onOpen }: onOpen) {
  return (
    <section className="services" id="services">
      <div className="services__inner">
        <div className="services__content">
          <h2 className="services__title">Услуги</h2>
          <p className="services__description">
            Мы используем последние технологии и методы, чтобы обеспечить нашим
            клиентам максимальное качество и результативность.
          </p>
          <Link to="/services">
            <Btn>Посмотреть все услуги</Btn>
          </Link>
        </div>
        <div className="services__cards">
          {/* Web-разработка карточка */}
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
                  <button onClick={onOpen}>Узнать стоимость</button>
                </div>
              </div>
            </div>
          </div>

          {/* Дизайн карточка */}
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
                  <button onClick={onOpen}>Узнать стоимость</button>
                </div>
              </div>
            </div>
          </div>

          {/* SEO карточка */}
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
                  <button onClick={onOpen}>Узнать стоимость</button>
                </div>
              </div>
            </div>
          </div>

          {/* Интернет-маркетинг карточка */}
          {/* <div className="card">
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
                  комплексное продвижение для привлечения клиентов и роста
                  продаж
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
          </div> */}

          {/* Мобильная разработка карточка */}
          {/* <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <div className="card__title">
                  <img src={mobile} alt="мобильные приложения" />
                  <div className="card__title--text">Мобильные приложения</div>
                </div>
                <div className="card__list">
                  <ul>
                    <li>Кроссплатформенные приложения</li>
                    <li>Нативные iOS и Android</li>
                    <li>UI/UX дизайн для мобильных</li>
                    <li>Интеграция с API и сервисами</li>
                  </ul>
                </div>
                <div className="card__utp">
                  современные приложения для удобства ваших клиентов
                </div>
              </div>
              <div className="card-back">
                <div className="card__title">
                  <img src={mobile} alt="мобильные приложения" />
                  <div className="card__title--text">Мобильные приложения</div>
                </div>
                <div className="card__content">
                  <p>
                    Создаём удобные и функциональные мобильные приложения для
                    вашего бизнеса.
                  </p>
                  <p>
                    Разрабатываем нативные приложения для iOS и Android, а также
                    кроссплатформенные решения на React Native и Flutter.
                    Обеспечиваем высокую производительность, интуитивный
                    интерфейс и интеграцию с необходимыми сервисами.
                  </p>
                  <p>
                    Помогаем вывести ваш продукт в App Store и Google Play,
                    обеспечивая поддержку и обновления после запуска.
                  </p>
                </div>
                <div className="card__btn">
                  <button onClick={onOpen}>Узнать стоимость</button>
                </div>
              </div>
            </div>
          </div> */}

          {/* Копирайтинг и контент карточка */}
          {/* <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <div className="card__title">
                  <img src={content} alt="контент" />
                  <div className="card__title--text">Контент и копирайтинг</div>
                </div>
                <div className="card__list">
                  <ul>
                    <li>Продающие тексты и слоганы</li>
                    <li>SEO-оптимизированный контент</li>
                    <li>Сценарии для видео и подкастов</li>
                    <li>Контент-стратегии для бренда</li>
                  </ul>
                </div>
                <div className="card__utp">
                  тексты, которые продают и вовлекают аудиторию
                </div>
              </div>
              <div className="card-back">
                <div className="card__title">
                  <img src={content} alt="контент" />
                  <div className="card__title--text">Контент и копирайтинг</div>
                </div>
                <div className="card__content">
                  <p>
                    Создаём тексты, которые убеждают, продают и укрепляют
                    доверие к вашему бренду.
                  </p>
                  <p>
                    Пишем продающие тексты для сайтов, лендингов, email-рассылок
                    и соцсетей. Разрабатываем SEO-оптимизированные статьи для
                    блога.
                    Наши тексты не только соответствуют правилам поисковых
                    систем, но и говорят с аудиторией на её языке.
                  </p>
                  <p>
                    Каждое слово работает на ваши бизнес-цели — от генерации
                    лидов до повышения лояльности.
                  </p>
                </div>
                <div className="card__btn">
                  <button onClick={onOpen}>Узнать стоимость</button>
                </div>
              </div>
            </div>
          </div> */}

          {/* Техническая поддержка карточка */}
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

          {/* Автоматизация бизнеса карточка */}
          {/* <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <div className="card__title">
                  <img src={automation} alt="автоматизация" />
                  <div className="card__title--text">Автоматизация бизнеса</div>
                </div>
                <div className="card__list">
                  <ul>
                    <li>Интеграция CRM и ERP систем</li>
                    <li>Сквозная аналитика</li>
                    <li>Чат-боты и автоответчики</li>
                    <li>Бизнес-процессы и workflow</li>
                  </ul>
                </div>
                <div className="card__utp">
                  цифровые решения для оптимизации ваших бизнес-процессов
                </div>
              </div>
              <div className="card-back">
                <div className="card__title">
                  <img src={automation} alt="автоматизация" />
                  <div className="card__title--text">Автоматизация бизнеса</div>
                </div>
                <div className="card__content">
                  <p>
                    Превращаем рутинные задачи в автоматизированные процессы,
                    экономя ваше время и ресурсы.
                  </p>
                  <p>
                    Интегрируем CRM, ERP, системы сквозной аналитики и другие
                    инструменты в единую экосистему. Настраиваем чат-ботов для
                    обработки заявок, автоматизируем коммуникацию с клиентами и
                    внутренние бизнес-процессы.
                  </p>
                  <p>
                    Результат — снижение операционных затрат, повышение
                    эффективности сотрудников и рост качества обслуживания
                    клиентов.
                  </p>
                </div>
                <div className="card__btn">
                  <button onClick={onOpen}>Узнать стоимость</button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Services;
