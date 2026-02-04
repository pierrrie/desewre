
interface onOpen {
  onOpen: () => void;
}

function FormMain({onOpen}: onOpen) {
  return (
    <section className="formMain">
        <div className="formMain__inner">
            <hr />
            <div className="formMain__title">
                ГОТОВЫ СДЕЛАТЬ НОВЫЙ ПРОЕКТ ВМЕСТЕ?
            </div>
            <div className="formMain__btn">
                <button onClick={onOpen}>Получить обратную связь</button>
            </div>
        </div>
    </section>
  );
}

export default FormMain;
