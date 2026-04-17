import design from "../image/design.svg";
import Cases from "../components/main/cases/Cases";
import FormMain from "../components/main/form/formMain";

interface onOpen {
    onOpen: () => void;
}

function DesignServices({onOpen}: onOpen) {
  return (
    <>
      <div className="container">
        <div className="WebService__inner">
          <div className="WebService__top">
            <div className="WebService__title">
              <h1>ДИЗАЙН ИНТЕРФЕЙСОВ</h1>
              <p>
                Мы создаём визуальные решения, которые делают продукты понятными,
                привлекательными и удобными. От бренд-концепций до интерфейсов
                для сайтов и приложений — каждый проект создаётся с акцентом на
                UX, стиль и бизнес-цели.
              </p>
              <p>
                Наш подход сочетает исследование, структуру и креатив: мы анализируем
                задачу, формируем пользовательский путь и создаём дизайн, который
                помогает бренду выделяться и работать эффективнее.
              </p>
            </div>
            <div className="WebService__card">
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
          </div>
          <div className="WebServices__bottom">
            <div className="WebServices__bottom__title">
                Что мы можем сделать для вас
            </div>
            <div className="WebServices__bottom__description">
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        UX/UI дизайн
                    </div>
                    <div className="WebServices__content__text">
                        Продумываем структуру и взаимодействие, чтобы каждый
                        пользователь легко находил нужную информацию и выполнял
                        целевые действия. Разрабатываем интерфейсы, которые
                        работают без лишних кликов.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Брендинг и айдентика
                    </div>
                    <div className="WebServices__content__text">
                        Создаём визуальный стиль, который отражает характер вашего
                        бизнеса и помогает запомниться. Логотипы, цветовая
                        палитра, графика и фирменные элементы.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Дизайн сайта
                    </div>
                    <div className="WebServices__content__text">
                        Разрабатываем дизайн сайтов и лендингов, которые выглядят
                        современно, гармонично и повышают доверие. Работает как на
                        продажу, так и на имидж.
                    </div>
                </div>
                <div className="WebServices__bottom__content">
                    <div className="WebServices__content__title">
                        Дизайн мобильных приложений
                    </div>
                    <div className="WebServices__content__text">
                        Проектируем интерфейсы для мобильных устройств с учётом
                        поведения пользователя и эргономики. Создаём понятные
                        и эффективные интерфейсы для приложений.
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

export default DesignServices;
