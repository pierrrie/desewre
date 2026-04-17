import '../../css/legal.css';

export default function DataProcessingConsent() {
  return (
    <section className="legal__section">
      <div className="container">
        <div className="legal__content">
          <div className="legal__header">
            <h1 className="legal__title">Согласие на обработку персональных данных</h1>
            <p className="legal__date">Последнее обновление: апрель 2026 г.</p>
          </div>

          <div className="legal__body">
            <div className="legal__article">
              <p>
                <strong>1.</strong> Я даю свое согласие компании DESEWRE (Оператор) на обработку моих персональных данных: фамилия, имя, отчество, номер телефона, адрес электронной почты.
              </p>
            </div>

            <div className="legal__article">
              <p>
                <strong>2.</strong> Оператор обрабатывает персональные данные с целью заключения, исполнения и прекращения гражданско-правовых договоров, информирования посредством отправки электронных писем, предоставления доступа к сервисам, информации и/или материалам, содержащимся на веб-сайте.
              </p>
            </div>

            <div className="legal__article">
              <p>
                <strong>3.</strong> Моё согласие является конкретным, предметным, информированным, сознательным и однозначным.
              </p>
            </div>

            <div className="legal__article">
              <p>
                <strong>4.</strong> Оператор обрабатывает персональные данные следующими способами: сбор; запись; систематизация; накопление; хранение; уточнение (обновление, изменение); извлечение; использование; передача (предоставление, доступ); обезличивание; блокирование; удаление; уничтожение; распространение.
              </p>
            </div>

            <div className="legal__article">
              <p>
                <strong>5.</strong> Оператор обрабатывает персональные данные как с использованием средств автоматизации, так и без использования таких средств.
              </p>
            </div>

            <div className="legal__article">
              <p>
                <strong>6.</strong> Оператор обрабатывает персональные данные в соответствии с Политикой конфиденциальности, размещенной по адресу: <a href="https://desewre.ru/privacy-policy">https://desewre.ru/privacy-policy</a>
              </p>
            </div>

            <div className="legal__article">
              <p>
                <strong>7.</strong> Согласие действует с момента его предоставления и до момента отзыва Согласия.
              </p>
            </div>

            <div className="legal__article">
              <p>
                <strong>8.</strong> Я вправе отозвать согласие путем направления Оператору заявления:
              </p>
              <ul className="legal__list">
                <li>в форме электронного документа по адресу электронной почты: <a href="mailto:info@desewre.com">desewre@yandex.ru</a></li>
              </ul>
            </div>

            <div className="legal__article">
              <p>
                <strong>9.</strong> Оператор рассматривает заявление в течение 10 (десяти) рабочих дней с момента его получения.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}