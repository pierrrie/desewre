import content from "../image/content.svg";
import Cases from "../components/main/cases/Cases";
import FormMain from "../components/main/form/formMain";

interface onOpen {
    onOpen: () => void;
}

function ContentServices({onOpen}: onOpen) {
  return (
    <>
      <div className="container">
        <div className="WebService__inner">
          <div className="WebService__top">
            <div className="WebService__title">
              <h1>КОНТЕНТ И КОПИРАЙТИНГ</h1>
              <p>
                Создаем продающие тексты и стратегии контента. Наши материалы
                помогают привлекать аудиторию и повышать конверсию.
              </p>
              <p>
                Мы не просто пишем тексты — мы создаём контент, который работает
                на ваш бизнес. От анализа аудитории до финального результата,
                каждый материал направлен на достижение ваших целей.
              </p>
            </div>
            <div className="WebService__card">
              <div className="services__pages__card">
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
            </div>
          </div>
          <div className="WebServices__bottom">
            <div className="WebServices__bottom__title">
                Что мы можем сделать для вас
            </div>
            <div className="WebServices__bottom__description">
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Продающие тексты
                    </div>
                    <div className="WebServices__content__text">
                        Создаём убедительные тексты для лендингов, сайтов и
                        рекламных кампаний, которые мотивируют к действию и
                        повышают конверсию.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        SEO-контент
                    </div>
                    <div className="WebServices__content__text">
                        Пишем статьи и материалы, оптимизированные для поисковых
                        систем, которые привлекают органический трафик и
                        укрепляют экспертность бренда.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Контент для соцсетей
                    </div>
                    <div className="WebServices__content__text">
                        Разрабатываем посты, сторис и контент-планы для социальных
                        сетей, которые вовлекают аудиторию и строят сообщество
                        вокруг бренда.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Сценарии и презентации
                    </div>
                    <div className="WebServices__content__text">
                        Создаём сценарии для видео, подкастов, презентаций и
                        других форматов, которые эффективно передают ваше
                        сообщение и достигают целей коммуникации.
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

export default ContentServices;