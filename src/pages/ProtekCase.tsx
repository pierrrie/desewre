import { Link } from "react-router-dom";
import FormMain from "../components/main/form/formMain";
import protek from "../image/protek.png";
import protek2 from "../image/protek2.jpg";

interface onOpen {
  onOpen: () => void;
}

function ProtekCase({ onOpen }: onOpen) {
  return (
    <div className="container case-page">
      <div className="case-page__top">
        <div className="case-page__logo">
          <img src={protek} alt="Логотип компании ПРОТЭК" className="case-page__logo-image" />
        </div>
        <div className="case-page__headline">
          <span className="case-page__label">Кейс</span>
          <h1>ПРОТЭК: комплексное усиление и гидроизоляция ЖБ конструкций</h1>
          <p>
            Решение для производителя материалов и подрядчика по ремонту бетона с поставкой материалов,
            усилением железобетонных конструкций и соблюдением требований АКЗ и ОГЗ.
          </p>
        </div>
      </div>

      <div className="case-page__hero">
        <img src={protek2} alt="Проект компании ПРОТЭК" className="case-page__hero-image" />
        <div className="case-page__hero-meta">
          <a href="https://protc.ru/" target="_blank" rel="noreferrer" className="case-page__website-link">
            Перейти на сайт проекта
          </a>
          <p>
            Компания ПРОТЭК специализируется на гидроизоляции, ремонте бетона, поставке материалов и комплексном усилении
            железобетонных конструкций. Проект ориентирован на повышение надежности критически важных объектов и соблюдение
            требований АКЗ/ОГЗ.
          </p>
        </div>
      </div>

      <div className="case-page__overview">
        <div className="case-page__company">
          <div className="case-page__company-name">ПРОТЭК</div>
          <div className="case-page__company-meta">Россия, Уфа</div>
        </div>

        <div className="case-page__stats">
          <div>
            <span>Бюджет</span>
            <strong>900 000 ₽</strong>
          </div>
          <div>
            <span>Релиз</span>
            <strong>март 2024</strong>
          </div>
          <div>
            <span>Время разработки</span>
            <strong>12 недель</strong>
          </div>
          <div>
            <span>Сфера</span>
            <strong>Гидроизоляция, ремонт бетона, усиление ЖБК</strong>
          </div>
        </div>
      </div>

      <div className="case-page__content">
        <div className="case-page__section case-page__section--wide">
          <h2>Проблема клиента</h2>
          <p>
            Компания ПРОТЭК нуждалась в цифровом кейсе и сайте, который бы отражал экспертность в ремонте бетона,
            гидроизоляции и усилении железобетонных конструкций. Отсутствие ясного позиционирования и предложения
            снижало конверсию заявок от строительных подрядчиков и заказчиков объектов.
          </p>
        </div>

        <div className="case-page__section case-page__section--wide">
          <h2>Цель проекта</h2>
          <p>
            Создать понятную и убедительную презентацию услуг ПРОТЭК для частных и корпоративных клиентов, подчеркнуть
            экспертизу по АКЗ и ОГЗ, усилению ЖБК и поставке материалов, а также увеличить количество звонков и заявок.
          </p>
        </div>

        <div className="case-page__section case-page__section--cards">
          <div className="case-page__card">
            <h3>Услуги клиента</h3>
            <ul>
              <li>Гидроизоляция и ремонт бетона</li>
              <li>Поставка материалов для строительных объектов</li>
              <li>Комплексное усиление железобетонных конструкций</li>
              <li>Работа в рамках АКЗ и ОГЗ</li>
            </ul>
          </div>
          <div className="case-page__card">
            <h3>Подход</h3>
            <ul>
              <li>Анализ ключевых услуг и целевой аудитории</li>
              <li>Выделение преимуществ компании в условиях контрактных обязательств</li>
              <li>Создание структуры для быстрых заявок и доступа к технической документации</li>
              <li>Оптимизация подачи информации для инженеров, подрядчиков и заказчиков</li>
            </ul>
          </div>
          <div className="case-page__card">
            <h3>Результат</h3>
            <ul>
              <li>Ясное позиционирование по гидроизоляции и усилению ЖБК</li>
              <li>Увеличение заявок от подрядчиков и объектов инфраструктуры</li>
              <li>Рост доверия к компании благодаря сервису «под ключ»</li>
            </ul>
          </div>
        </div>

        <div className="case-page__section">
          <h2>Процесс</h2>
          <ul>
            <li><strong>Исследование:</strong> оценили конкурентов в нише гидроизоляции, ремонтов бетона и усилений ЖБК.</li>
            <li><strong>Стратегия:</strong> сформировали контент для каждой услуги, включая АКЗ/ОГЗ и коммерческие предложения.</li>
            <li><strong>Дизайн:</strong> разработали простой и профессиональный интерфейс, который выгодно выделяет комплексные предложения.</li>
            <li><strong>Разработка:</strong> реализовали страницу с быстрым доступом к заявке и контактам, адаптированную под мобильные устройства.</li>
            <li><strong>Тестирование:</strong> проверили на удобство использования менеджерами проектов и строительными подрядчиками.</li>
          </ul>
        </div>

        <div className="case-page__section">
          <h2>Что было сделано</h2>
          <ul>
            <li>Сформировали блоки услуг для гидроизоляции, ремонта и усиления конструкций.</li>
            <li>Добавили коммерческое предложение с указанием поставки материалов и способности работать по АКЗ/ОГЗ.</li>
            <li>Проверили структуру страницы на понятность для технической и коммерческой аудитории.</li>
            <li>Обеспечили быстрый доступ к заявке и расчёту стоимости для потенциальных клиентов.</li>
          </ul>
        </div>

        <div className="case-page__section">
          <h2>Чего добились</h2>
          <p>
            Клиент получил прозрачную страницу, которая демонстрирует экспертность в строительных работах и надежность поставщика.
            Это увеличило доверие подрядчиков и помогло подготовить компанию к работе с государственными и коммерческими заказами.
          </p>
        </div>

        <div className="case-page__section case-page__section--wide case-page__result-grid">
          <div className="case-page__result-card">
            <h3>Надежность</h3>
            <p>Усиление конструкций и гидроизоляция представлены как комплексное решение, что снижает риски аварий и протечек.</p>
          </div>
          <div className="case-page__result-card">
            <h3>Прозрачность</h3>
            <p>Подача услуг по АКЗ/ОГЗ помогает потенциальным клиентам быстро оценить возможность работы с компанией.</p>
          </div>
          <div className="case-page__result-card">
            <h3>Скорость</h3>
            <p>Удобная заявка позволяет подрядчикам и инженерам оперативно связаться с менеджером и обсудить проект.</p>
          </div>
          <div className="case-page__result-card">
            <h3>Профессионализм</h3>
            <p>Фокус на ремонте бетона и жесткой арматуре создает впечатление технически выверенного подхода.</p>
          </div>
          <div className="case-page__result-card">
            <h3>Поставки</h3>
            <p>Подчеркнута возможность поставки материалов, что делает предложение удобным «под ключ».</p>
          </div>
          <div className="case-page__result-card">
            <h3>Конверсия</h3>
            <p>Четкое позиционирование помогает увеличить заявки от строительных объектов и подрядчиков.</p>
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

export default ProtekCase;
