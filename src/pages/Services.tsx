import BtnShow from "../components/btn/btnShow";
import web from "../image/web.svg";
import design from "../image/design.svg";
import seo from "../image/seo.svg";
import marketing from "../image/marketing.svg";
import support from "../image/support.svg";
// import mobile from "../image/mobile.svg";
import content from "../image/content.svg";
import auto from "../image/auto.svg";
import { Link } from 'react-router-dom';

interface onOpen {
  onOpen: () => void;
}

function Services({ onOpen }: onOpen) {
  return (
    <>
      <div className="container">
        <div className="services__pages__inner">
          <div className="services__pages__top">
            <div className="services__pages__title">
              <h1>Наши услуги</h1>
              <p>
                Мы стремимся предоставить нашим клиентам всестороннюю поддержку
                в их бизнесе. Готовы предложить широкий спектр услуг, которые
                помогут вашей компании добиться новых успехов и укрепить свое
                положение на рынке.
              </p>
            </div>
          </div>
          <hr />
          <div className="services__pages__cards">
            <div className="services__pages__card">
              <div className="services__pages__card--title">
                <div className="services__pages__card--text">
                  <span>Web разработка</span>
                  <p>
                    Разрабатываем сайты любой сложности, под ваши цели и задачи.
                    Стоимость разработки зависит от проекта и требования
                    заказчика. Каждый сайт по умолчанию адаптируется для ПК,
                    планшетов и смартфонов.
                  </p>
                </div>
                <Link to="/webservices">
                  <BtnShow>Узнать подробнее</BtnShow>
                </Link>
              </div>
              <div className="services__pages__card">
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

            {/* Дизайн карточка */}
            <div className="services__pages__card services__pages__card-reverse">
              <div className="services__pages__card--title">
                <div className="services__pages__card--text">
                  <span>Дизайн</span>
                  <p>
                    Создаем стильные и удобные дизайн-концепции, которые
                    идеально соответствуют вашему бренду и бизнес-целям. Каждый
                    проект разрабатывается с акцентом на визуальную
                    привлекательность, юзабилити и функциональность.
                  </p>
                </div>
                <Link to="/designServices"><BtnShow>Узнать подробнее</BtnShow></Link>
              </div>
              <div className="services__pages__card">
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
                          Разрабатываем пользовательские интерфейсы (UI),
                          которые интуитивно понятны и удобны. Проектируем
                          пользовательский опыт (UX), чтобы каждая встреча с
                          продуктом была логичной и приятной.
                        </p>
                        <p>
                          Мы делаем дизайн, который не только красив, но и
                          работает на ваши цели — привлекает клиентов, повышает
                          лояльность и увеличивает продажи.
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

            {/* SEO карточка */}
            <div className="services__pages__card">
              <div className="services__pages__card--title">
                <div className="services__pages__card--text">
                  <span>SEO</span>
                  <p>
                    Оптимизируем сайты для поисковых систем, чтобы увеличить
                    видимость вашего бизнеса в интернете. Наши методы позволяют
                    привлекать целевую аудиторию и повышать конверсию.
                  </p>
                </div>
                <Link to="/seoServices"><BtnShow>Узнать подробнее</BtnShow></Link>
              </div>
              <div className="services__pages__card">
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
                          Комплексная поисковая оптимизация для роста видимости
                          вашего сайта.
                        </p>
                        <p>
                          Проводим глубокий аудит, устраняем технические ошибки,
                          оптимизируем структуру и контент. Наши методы
                          соответствуют рекомендациям поисковых систем.
                        </p>
                        <p>
                          Результат — рост позиций по ключевым запросам,
                          увеличение целевого органического трафика и, как
                          следствие, больше заявок и продаж для вашего бизнеса.
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

            {/* Интернет-маркетинг карточка */}
            <div className="services__pages__card services__pages__card-reverse">
              <div className="services__pages__card--title">
                <div className="services__pages__card--text">
                  <span>Интернет-маркетинг</span>
                  <p>
                    Разрабатываем и реализуем стратегии продвижения в
                    цифровой среде. Используем современные инструменты
                    маркетинга для привлечения клиентов и увеличения продаж.
                  </p>
                </div>
                <Link to="/marketingServices"><BtnShow>Узнать подробнее</BtnShow></Link>
              </div>
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
                </div>
              </div>
            </div>
            {/* <div className="services__pages__card">
              <div className="services__pages__card--title">
                <div className="services__pages__card--text">
                  <span>Мобильные приложения</span>
                  <p>
                    Создаем современные мобильные приложения для iOS и Android.
                    Разрабатываем удобные интерфейсы и функциональные решения
                    для вашего бизнеса.
                  </p>
                </div>
                <BtnShow>Узнать подробнее</BtnShow>
              </div>
              <div className="services__pages__card">
                <div className="card">
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
                </div>
              </div>
            </div> */}

            <div className="services__pages__card">
              <div className="services__pages__card--title">
                <div className="services__pages__card--text">
                  <span>Контент и копирайтинг</span>
                  <p>
                    Создаем продающие тексты и стратегии контента. Наши
                    материалы помогают привлекать аудиторию и повышать
                    конверсию.
                  </p>
                </div>
                <Link to="/contentServices"><BtnShow>Узнать подробнее</BtnShow></Link>
              </div>
              <div className="services__pages__card">
                <div className="card">
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
                </div>
              </div>
            </div>
            <div className="services__pages__card services__pages__card-reverse">
              <div className="services__pages__card--title">
                <div className="services__pages__card--text">
                  <span>Техническая поддержка</span>
                  <p>
                    Обеспечиваем стабильную работу ваших онлайн-ресурсов.
                    Предоставляем поддержку и оперативное
                    решение технических вопросов.
                  </p>
                </div>
                <Link to="/supportServices"><BtnShow>Узнать подробнее</BtnShow></Link>
              </div>
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

            <div className="services__pages__card">
              <div className="services__pages__card--title">
                <div className="services__pages__card--text">
                  <span>Автоматизация бизнеса</span>
                  <p>
                    Внедряем системы автоматизации для оптимизации
                    бизнес-процессов. Помогаем сократить рутинные задачи и
                    повысить эффективность работы.
                  </p>
                </div>
                <Link to="/autoServices"><BtnShow>Узнать подробнее</BtnShow></Link>
              </div>
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
      </div>
    </>
  );
}

export default Services;