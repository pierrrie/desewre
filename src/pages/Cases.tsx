import { Link } from "react-router-dom";


function Cases() {
  return (
    <>
      <div className="container">
        <div className="cases__inner__pages">
          <div className="cases__pages__title">
            <h1>Кейсы DESEWRE</h1>
          </div>
          <div className="cases__pages__description">
            <p>
              Раздел проекты представляет собой богатый и разнообразный
              ассортимент примеров наших успешных проектов, от веб-разработки и
              приложений для мобильных устройств до разработки программного
              обеспечения и решений для бизнеса.
            </p>
            <p>
              Здесь вы найдете многочисленные примеры нашей экспертизы,
              инноваций и лучших практик, которые мы используем для создания
              продуктов, удовлетворяющих потребности наших клиентов
            </p>
          </div>
          <hr />
          <div className="cases__pages__cards">
            <div className="cases__cards holographic-container">
              <Link to="/case-example" className="cases__card one-card holographic-card cases__card--link">
                <h4>Draxter</h4>
                <p className="cases__desc__card">Разработка интернет-магазина, UI/UX дизайн, SEO</p>
              </Link>
              <Link to="/protek-case" className="cases__card two-card holographic-card cases__card--link">
                <h4>Протэк</h4>
                <p className="cases__desc__card">Разработка интернет-магазина, SEO</p>
              </Link>
              <Link to="/paradigma-case" className="cases__card three-card holographic-card">
                  <h4>Paradigma</h4>
                  <p className="cases__desc__card">Разработка корпоративного сайта, UX/UI дизайн, SEO</p>
              </Link>
            </div>
            {/* <div className="cases__cards holographic-container cases__cards__reverse">
              <div className="cases__card one-card holographic-card">
                <h4>Кейс 1</h4>
              </div>
              <div className="cases__card two-card holographic-card">
                <h4>Кейс 2</h4>
              </div>
              <div className="cases__card three-card holographic-card">
                <h4>Кейс 3</h4>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cases;
