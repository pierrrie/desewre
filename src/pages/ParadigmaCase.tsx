import { Link } from "react-router-dom";
import FormMain from "../components/main/form/formMain";
import paradigma from "../image/paradigma.svg";
import paradigmatwo from "../image/paradigmatwo.png";

interface onOpen {
  onOpen: () => void;
}

function ParadigmaCase({ onOpen }: onOpen) {
  return (
    <div className="container case-page">
      <div className="case-page__top">
        <div className="case-page__logo">
          <img
            src={paradigma}
            alt="Логотип стоматологической клиники Paradigma"
            className="case-page__logo-image"
          />
        </div>
        <div className="case-page__headline">
          <span className="case-page__label">Кейс</span>
          <h1>Разработка сайта для стоматологической клиники</h1>
          <p>
            Создание современного сайта для стоматологии с акцентом на доверие,
            удобную запись пациентов и продвижение услуг в поисковых системах.
          </p>
        </div>
      </div>

      <div className="case-page__hero">
        <img
          src={paradigmatwo}
          alt="Пример проекта Paradigma"
          className="case-page__hero-image"
        />
        <div className="case-page__hero-meta">
          <a
            href="https://paradigma-dental.ru/"
            target="_blank"
            rel="noreferrer"
            className="case-page__website-link"
          >
            Перейти на сайт проекта
          </a>
          <p>
            Пример сайта стоматологической клиники Paradigma. Включает удобную
            онлайн-запись на приём, описание услуг, кейсы лечения, адаптивный
            дизайн и понятную структуру для быстрого принятия решения пациентом.
          </p>
        </div>
      </div>

      <div className="case-page__overview">
        <div className="case-page__company">
          <div className="case-page__company-name">Paradigma</div>
          <div className="case-page__company-meta">
            Стоматологическая клиника
          </div>
        </div>

        <div className="case-page__stats">
          <div>
            <span>Бюджет</span>
            <strong>450 000 ₽</strong>
          </div>
          <div>
            <span>Релиз</span>
            <strong>март 2024</strong>
          </div>
          <div>
            <span>Время разработки</span>
            <strong>10 недель</strong>
          </div>
          <div>
            <span>Сфера</span>
            <strong>Стоматология, медицинские услуги</strong>
          </div>
        </div>
      </div>

      <div className="case-page__content">
        <div className="case-page__section case-page__section--wide">
          <h2>Проблема клиента</h2>
          <p>
            Стоматологическая клиника Paradigma столкнулась с нехваткой новых
            пациентов из интернета. Старый сайт не вызывал доверия, был неудобен
            для записи и не отображался корректно на мобильных устройствах.
            Также отсутствовала SEO-оптимизация, из-за чего клиника теряла
            потенциальных клиентов.
          </p>
        </div>

        <div className="case-page__section case-page__section--wide">
          <h2>Цель проекта</h2>
          <p>
            Увеличить поток пациентов через интернет, повысить доверие к клинике
            и создать удобный инструмент онлайн-записи. Разработать современный
            сайт с акцентом на услуги, врачей и реальные кейсы лечения.
          </p>
        </div>

        <div className="case-page__section case-page__section--cards">
          <div className="case-page__card">
            <h3>Услуги клиента</h3>
            <ul>
              <li>Разработка сайта</li>
              <li>UX/UI дизайн</li>
              <li>SEO-оптимизация</li>
              <li>Интеграция онлайн-записи</li>
              <li>Техническая поддержка</li>
            </ul>
          </div>

          <div className="case-page__card">
            <h3>Технологии</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Node.js</li>
            </ul>
          </div>

          <div className="case-page__card">
            <h3>Результат</h3>
            <ul>
              <li>+60% заявок на приём</li>
              <li>Рост органического трафика на 45%</li>
              <li>Увеличение записей с мобильных устройств</li>
            </ul>
          </div>
        </div>

        <div className="case-page__section">
          <h2>Процесс разработки</h2>
          <ul>
            <li>
              <strong>Анализ:</strong> Исследование рынка стоматологических услуг
              и конкурентов.
            </li>
            <li>
              <strong>Дизайн:</strong> Создание доверительного визуального стиля
              с акцентом на чистоту и профессионализм.
            </li>
            <li>
              <strong>Разработка:</strong> Реализация сайта с удобной структурой
              услуг и записи.
            </li>
            <li>
              <strong>Тестирование:</strong> Проверка UX и адаптивности на всех
              устройствах.
            </li>
            <li>
              <strong>Запуск:</strong> Подключение аналитики и настройка SEO.
            </li>
          </ul>
        </div>

        <div className="case-page__section">
          <h2>Технические детали</h2>
          <p>
            Сайт реализован с использованием современных frontend-технологий.
            Особое внимание уделено скорости загрузки, адаптивности и удобству
            записи на приём. Интегрирована форма онлайн-записи, подключена
            аналитика и выполнена базовая SEO-оптимизация.
          </p>
        </div>

        <div className="case-page__section">
          <h2>Что сделали</h2>
          <ul>
            <li>
              Разработали удобную структуру сайта с акцентом на услуги и врачей
            </li>
            <li>Реализовали онлайн-запись на приём</li>
            <li>
              Оптимизировали сайт под поисковые запросы (лечение, имплантация,
              чистка зубов)
            </li>
            <li>Создали адаптивный и быстрый интерфейс</li>
          </ul>
        </div>

        <div className="case-page__section">
          <h2>Чего добились</h2>
          <p>
            Клиника получила стабильный поток новых пациентов через сайт.
            Повысилось доверие к бренду, увеличилось количество записей на
            приём, а сайт стал основным каналом привлечения клиентов.
          </p>
        </div>

        <div className="case-page__section case-page__section--wide case-page__result-grid">
          <div className="case-page__result-card">
            <h3>Рост заявок</h3>
            <p>
              Количество записей на приём выросло на 60% уже в первые месяцы
              после запуска сайта.
            </p>
          </div>

          <div className="case-page__result-card">
            <h3>Улучшение конверсии</h3>
            <p>
              Конверсия сайта увеличилась благодаря понятной структуре и удобной
              записи.
            </p>
          </div>

          <div className="case-page__result-card">
            <h3>Скорость загрузки</h3>
            <p>
              Быстрая загрузка страниц снизила показатель отказов и улучшила
              пользовательский опыт.
            </p>
          </div>

          <div className="case-page__result-card">
            <h3>SEO-видимость</h3>
            <p>
              Сайт начал привлекать органический трафик по ключевым
              стоматологическим запросам.
            </p>
          </div>

          <div className="case-page__result-card">
            <h3>Пользовательский опыт</h3>
            <p>
              Простой и понятный интерфейс повысил удобство для пользователей
              всех возрастов.
            </p>
          </div>

          <div className="case-page__result-card">
            <h3>Бизнес-эффект</h3>
            <p>
              Сайт стал ключевым инструментом привлечения пациентов и увеличения
              прибыли клиники.
            </p>
          </div>
        </div>
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

export default ParadigmaCase;