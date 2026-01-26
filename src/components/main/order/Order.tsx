import { useEffect, useState } from "react";

interface Mouse {
  x: number;
  y: number;
}

function Order() {
  const [pos, setPos] = useState<Mouse>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="order">
      <div className="order__inner">
        <div className="order__content">
          МЫ ВСЕГДА СМОТРИМ НА ИТ - ЗАДАЧИ{" "}
          <span className="order__color">ЧЕРЕЗ ПРИЗМУ БИЗНЕСА</span> И СТРЕМИМСЯ
          НАЛАДИТЬ ВЗАИМОПОНИМАНИЕ МЕЖДУ РАЗРАБОТКОЙ И ЗАКАЗЧИКОМ, СОЕДИНЯЯ
          DIGITAL И СТРАТЕГИЮ КОМПАНИИ.
        </div>
      </div>
      <div className="order__btn">
        <button
          style={{
            position: "fixed",
            left: pos.x,
            top: pos.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          Заказать проект
        </button>
      </div>
    </section>
  );
}

export default Order;
