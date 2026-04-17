import seo from "../image/seo.svg";
import Cases from "../components/main/cases/Cases";
import FormMain from "../components/main/form/formMain";

interface onOpen {
    onOpen: () => void;
}

function SeoServices({onOpen}: onOpen) {
  return (
    <>
      <div className="container">
        <div className="WebService__inner">
          <div className="WebService__top">
            <div className="WebService__title">
              <h1>SEO ПРОДВИЖЕНИЕ</h1>
              <p>
                Помогаем сайтам занять лидирующие позиции в поисковой выдаче и
                привлекать целевой трафик. Мы анализируем ваш проект, конкурентов
                и аудиторию, чтобы строить продвижение на реальных данных.
              </p>
              <p>
                В работе используем комплексный подход: техническую оптимизацию,
                качественный контент и устойчивые стратегии для роста позиций и
                увеличения конверсии.
              </p>
            </div>
            <div className="WebService__card">
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
          </div>
          <div className="WebServices__bottom">
            <div className="WebServices__bottom__title">
                Что мы можем сделать для вас
            </div>
            <div className="WebServices__bottom__description">
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Технический SEO аудит
                    </div>
                    <div className="WebServices__content__text">
                        Анализируем структуру сайта, ошибки индексации, скорость
                        загрузки и параметры безопасности, чтобы поисковые системы
                        корректно сканировали и ранжировали ресурс.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Контент и семантика
                    </div>
                    <div className="WebServices__content__text">
                        Составляем семантическое ядро, оптимизируем страницы,
                        создаём продающий и релевантный контент, который отвечает
                        запросам пользователей.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Местное продвижение
                    </div>
                    <div className="WebServices__content__text">
                        Помогаем бизнесу быть заметным в локальном поиске,
                        оформляем карточки в картах и настраиваем локальные
                        мероприятия для регионального роста.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Мониторинг
                    </div>
                    <div className="WebServices__content__text">
                        Отслеживаем позиции, трафик и действия пользователей,
                        чтобы адаптировать стратегию и показывать реальные
                        результаты продвижения.
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

export default SeoServices;
