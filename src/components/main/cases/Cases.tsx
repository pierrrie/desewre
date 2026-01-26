import Btn from "../../btn/btnShow";

function Cases() {
  return (
    <section className="cases">
      <div className="cases__inner">
        <h3 className="cases__title">Проекты</h3>
        <div className="cases__description">
          <p>
            Раздел проекты представляет собой богатый и разнообразный
            ассортимент примеров наших успешных проектов, от веб-разработки и
            приложений для мобильных устройств до разработки программного
            обеспечения и решений для бизнеса.
          </p>
          <p>
            Здесь вы найдете многочисленные примеры нашей экспертизы, инноваций
            и лучших практик, которые мы используем для создания продуктов,
            удовлетворяющих потребности наших клиентов.
          </p>
        </div>
        <Btn>Посмотреть все кейсы</Btn>
        <div className="cases__cards holographic-container">
            <div className="cases__card one-card holographic-card">
                <h4>Кейс 1</h4>
            </div>
            <div className="cases__card two-card holographic-card">
                <h4>Кейс 2</h4>
            </div>
            <div className="cases__card three-card holographic-card">
                <h4>Кейс 3</h4>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Cases;
