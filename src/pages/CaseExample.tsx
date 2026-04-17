import { Link } from "react-router-dom";
import FormMain from "../components/main/form/formMain";
import draxter from "../image/draxter.svg";
import draxterlogo from "../image/draxterlogo.svg";

interface onOpen {
  onOpen: () => void;
}

function CaseExample({onOpen}: onOpen) {
  return (
    <div className="container case-page">
      <div className="case-page__top">
        <div className="case-page__logo">
          <img src={draxter} alt="Логотип компании Draxter" className="case-page__logo-image" />
        </div>
        <div className="case-page__headline">
          <span className="case-page__label">Кейс</span>
          <h1>Разработка интернет-магазина для завода изготовителя</h1>
          <p>Создание высоконагруженного интернет-магазина с интуитивным интерфейсом и сильной SEO-оптимизацией.</p>
        </div>
      </div>

      <div className="case-page__hero">
        <img src={draxterlogo} alt="Пример проекта Draxter" className="case-page__hero-image" />
        <div className="case-page__hero-meta">
          <a href="https://draxter.ru" target="_blank" rel="noreferrer" className="case-page__website-link">
            Перейти на сайт проекта
          </a>
          <p>Пример интернет-магазина для завода изготовителя. Включает адаптивный дизайн, информативную страницу каталога и удобную форму заявки, удобные фильтры, интуитивно понятная карточка товара.</p>
        </div>
      </div>

      <div className="case-page__overview">
        <div className="case-page__company">
          <div className="case-page__company-name">StankoPromGroup</div>
          <div className="case-page__company-meta">Челябинск, Россия</div>
        </div>

        <div className="case-page__stats">
          <div>
            <span>Бюджет</span>
            <strong>1 000 000 ₽</strong>
          </div>
          <div>
            <span>Релиз</span>
            <strong>июль 2023</strong>
          </div>
          <div>
            <span>Время разработки</span>
            <strong>16 недель</strong>
          </div>
          <div>
            <span>Сфера</span>
            <strong>Машиностроение, садово-лесное и перерабатывающее оборудование</strong>
          </div>
        </div>
      </div>

      <div className="case-page__content">
        <div className="case-page__section case-page__section--wide">
          <h2>Проблема клиента</h2>
          <p>
            Компания StankoPromGroup столкнулась с низким уровнем онлайн-присутствия, отсутствием лидов и отсутствием эффективного инструмента для привлечения новых клиентов в сфере машиностроения и перерабатывающего оборудования. Старый сайт был устаревшим, не адаптивным и не оптимизированным под поисковые системы, что приводило к потере потенциальных заказчиков и снижению продаж оборудования.
          </p>
        </div>

        <div className="case-page__section case-page__section--wide">
          <h2>Цель проекта</h2>
          <p>
            Повысить количество заявок на технику и перерабатывающее оборудование, создать понятный маршрут клиентского пути и улучшить доверие к бренду за счет профессионального дизайна интернет-магазина и адаптивного сайта с сильной SEO-оптимизацией.
          </p>
        </div>

        <div className="case-page__section case-page__section--cards">
          <div className="case-page__card">
            <h3>Услуги клиента</h3>
            <ul>
              <li>Разработка сайта</li>
              <li>Разработка макета сайта (дизайн)</li>
              <li>SEO оптимизация</li>
              <li>Техническая поддержка</li>

            </ul>
          </div>
          <div className="case-page__card">
            <h3>Технологии</h3>
            <ul>
              <li>PHP</li>
              <li>MySQL</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>1C-Bitrix</li>
            </ul>
          </div>
          <div className="case-page__card">
            <h3>Результат</h3>
            <ul>
              <li>+35% заявок за первый квартал</li>
              <li>Уменьшено время загрузки на 28%</li>
              <li>Полностью адаптивный дизайн на всех устройствах</li>
            </ul>
          </div>
        </div>

        <div className="case-page__section">
          <h2>Процесс разработки</h2>
          <ul>
            <li><strong>Анализ и планирование:</strong> Изучение рынка машиностроения и перерабатывающего оборудования, анализ конкурентов и определение целевой аудитории для завода-изготовителя.</li>
            <li><strong>Дизайн:</strong> Создание прототипов и макетов интернет-магазина с учетом брендинга компании и специфики оборудования.</li>
            <li><strong>Разработка:</strong> Написание кода с использованием современных технологий для обеспечения высокой производительности и обработки больших объемов данных.</li>
            <li><strong>Тестирование:</strong> Проверка на различных устройствах и браузерах, оптимизация скорости загрузки для высоконагруженного сайта.</li>
            <li><strong>Запуск и поддержка:</strong> Деплой сайта и настройка аналитики для отслеживания результатов продаж и заявок.</li>
          </ul>
        </div>

        <div className="case-page__section">
          <h2>Технические детали</h2>
          <p>
            Интернет-магазин построен на платформе 1C-Bitrix с использованием PHP и MySQL для backend. Frontend реализован с помощью HTML, CSS и JavaScript для обеспечения интуитивного интерфейса. Интегрирована система управления каталогом товаров, фильтры и поиск. Настроена SEO-оптимизация и аналитика для отслеживания продаж и поведения пользователей.
          </p>
        </div>

        <div className="case-page__section">
          <h2>Что сделали</h2>
          <ul>
            <li>Разработали структуру интернет-магазина с каталогом товаров, фильтрами и удобной навигацией.</li>
            <li>Собрали семантическое ядро и оптимизировали контент под поисковые запросы в сфере машиностроения.</li>
            <li>Настроили быстрый адаптивный интерфейс для мобильных пользователей и высокую нагрузку.</li>
            <li>Внедрили аналитику и метрики для отслеживания продаж и лидов на оборудование.</li>
          </ul>
        </div>

        <div className="case-page__section">
          <h2>Чего добились</h2>
          <p>
            Клиент получил стабильный приток новых заявок на оборудование, вырос средний чек и улучшилась конверсия из посетителя в покупателя. Интернет-магазин стал основным каналом продаж для завода и показал высокий уровень доверия у целевой аудитории в машиностроительной отрасли.
          </p>
        </div>

        <div className="case-page__section case-page__section--wide case-page__result-grid">
          <div className="case-page__result-card">
            <h3>Рост продаж</h3>
            <p>Заявки увеличились на 35% в первом квартале после запуска, а продажи оборудования стали на порядок более стабильными за счет потока лидов из сайта.</p>
          </div>
          <div className="case-page__result-card">
            <h3>Улучшение конверсии</h3>
            <p>Конверсия каталога выросла на 18%, а заявки через формы — на 24%, благодаря понятной структуре и новому UX.</p>
          </div>
          <div className="case-page__result-card">
            <h3>Скорость загрузки</h3>
            <p>Время загрузки страниц сократилось на 28%, что снизило показатель отказов и позволило пользователям быстрее переходить к выбору оборудования.</p>
          </div>
          <div className="case-page__result-card">
            <h3>SEO-видимость</h3>
            <p>Сайт начал занимать позиции по целевым ключам в нише машиностроительного оборудования и привлек стабильный органический трафик.</p>
          </div>
          <div className="case-page__result-card">
            <h3>Пользовательский опыт</h3>
            <p>Адаптивный интерфейс и продуманная карточка товара сделали сайт удобным как на десктопе, так и на мобильных устройствах.</p>
          </div>
          <div className="case-page__result-card">
            <h3>Бизнес-эффект</h3>
            <p>Проект стал основной цифровой точкой контакта для заводов-партнёров и позволил клиенту обрабатывать заявки быстрее и точнее.</p>
          </div>
        </div>

        {/* <div className="case-page__section case-page__section--wide">
          <h2>Отзыв клиента</h2>
          <blockquote>
            "Работа с DESEWRE превзошла все ожидания. Новый интернет-магазин не только выглядит профессионально, но и действительно работает на привлечение клиентов и увеличение продаж оборудования. Мы видим рост заявок и улучшение позиций в поисковиках. Рекомендуем всем в машиностроительной отрасли!"
          </blockquote>
          <cite>— Алексей Иванов, Директор StankoPromGroup</cite>
        </div> */}
      </div>

      <div className="case-page__footer">
        <Link to="/cases" className="case-page__back-link">
          Назад к кейсам
        </Link>
      </div>
      <FormMain onOpen={onOpen} />
    </div>
  );
}

export default CaseExample;
