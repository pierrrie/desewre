import { useState } from 'react';
import '../../../css/faq.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'Как долго занимает разработка веб-сайта?',
    answer:
      'Сроки разработки зависят от сложности проекта. Простой сайт можно создать за 2-4 недели, сложные проекты могут занять 2-3 месяца и более. Мы обсудим сроки на этапе консультации.',
  },
  {
    id: 2,
    question: 'Какие технологии вы используете для разработки?',
    answer:
      'Мы используем современные технологии: React, TypeScript, Node.js, PostgreSQL, MongoDB и другие. Выбор технологии зависит от требований вашего проекта и задач, которые нужно решить.',
  },
  {
    id: 3,
    question: 'Предоставляете ли вы поддержку после запуска сайта?',
    answer:
      'Да, мы предоставляем полный спектр услуг поддержки: техническая поддержка, обновления, баг-фиксы, оптимизация производительности. Вы можете выбрать подходящий для вас пакет поддержки.',
  },
  {
    id: 4,
    question: 'Включена ли SEO оптимизация в разработку сайта?',
    answer:
      'SEO оптимизация может быть включена как в базовый пакет, так и предоставляться как отдельная услуга. Мы проведём аудит, оптимизируем структуру сайта, содержание и техническую часть для улучшения ранжирования.',
  },
  {
    id: 5,
    question: 'Как происходит процесс разработки?',
    answer:
      'Процесс разработки включает следующие этапы: консультация и сбор требований, прототипирование, дизайн, разработка, тестирование и запуск. Мы поддерживаем регулярное общение с клиентом на каждом этапе.',
  },
  {
    id: 6,
    question: 'Какая стоимость разработки веб-сайта?',
    answer:
      'Стоимость зависит от многих факторов: функциональность, дизайн, количество страниц, интеграции с внешними системами. Мы предоставляем индивидуальные расценки после анализа ваших требований.',
  },
  {
    id: 7,
    question: 'Сайт будет адаптирован для мобильных устройств?',
    answer:
      'Абсолютно! Все наши проекты разрабатываются с использованием responsive дизайна и полностью адаптированы под смартфоны, планшеты и другие устройства.',
  },
  {
    id: 8,
    question: 'Могу ли я самостоятельно изменять содержание сайта?',
    answer:
      'Да, мы можем интегрировать CMS (систему управления содержимым) в ваш сайт, что позволит вам самостоятельно обновлять текст, изображения и другой контент без технических знаний.',
  },
];

interface FAQProps {
  onOpen?: () => void;
}

export default function Faq({ onOpen }: FAQProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq__section">
      <div className="container">
        <div className="faq__content">
          <div className="faq__header">
            <h1 className="faq__title">Часто задаваемые вопросы</h1>
            <p className="faq__subtitle">
              Найдите ответы на интересующие вас вопросы о нашей работе и услугах
            </p>
          </div>

          <div className="faq__list">
            {faqData.map((item) => (
              <div
                key={item.id}
                className={`faq__item ${openId === item.id ? 'faq__item--open' : ''}`}
              >
                <button
                  className="faq__question"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={openId === item.id}
                >
                  <span className="faq__question__text">{item.question}</span>
                  <span className="faq__icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {openId === item.id && (
                  <div className="faq__answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {onOpen && (
            <div className="faq__cta">
              <button className="faq__contact__btn" onClick={onOpen}>
                Если у вас есть другие вопросы
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
