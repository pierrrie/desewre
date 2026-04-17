import Btn from "../../btn/btnShow";
import { Link } from "react-router-dom";

function Cases() {
  return (
    <section className="cases">
      <div className="cases__inner">
        <h3 className="cases__title">Проекты</h3>
        <div className="cases__description">
          <p>
            Раздел проекты представляет собой богатый и разнообразный
            ассортимент примеров наших успешных проектов, от веб-разработки и до разработки программного
            обеспечения и решений для бизнеса.
          </p>
          <p>
            Здесь вы найдете многочисленные примеры нашей экспертизы, инноваций
            и лучших практик, которые мы используем для создания продуктов,
            удовлетворяющих потребности наших клиентов.
          </p>
        </div>
        <Link to="/cases">
          <Btn>Посмотреть все кейсы</Btn>
        </Link>
        <div className="cases__cards holographic-container">
            <Link to="/case-example" className="cases__card one-card holographic-card">
                <h4>Draxter</h4>
                <p className="cases__desc__card">Разработка интернет-магазина, UI/UX дизайн, SEO, техническая поддержка</p>
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
      </div>
    </section>
  );
}

export default Cases;
