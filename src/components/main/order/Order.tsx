import { useEffect, useState, useRef } from "react";

interface onOpen {
  onOpen: () => void;
}

function Order({ onOpen }: onOpen) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const orderRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
      
      // Проверяем, находится ли мышь внутри .order
      if (orderRef.current) {
        const rect = orderRef.current.getBoundingClientRect();
        const isInside = 
          e.clientX >= rect.left && 
          e.clientX <= rect.right && 
          e.clientY >= rect.top && 
          e.clientY <= rect.bottom;
        
        if (isInside !== isHovered) {
          setIsHovered(isInside);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered]);

  return (
    <section className="order" ref={orderRef}>
      <div className="order__inner">
        <div className="order__content">
          МЫ ВСЕГДА СМОТРИМ НА IT - ЗАДАЧИ{" "}
          <span className="order__color">ЧЕРЕЗ ПРИЗМУ БИЗНЕСА</span> И СТРЕМИМСЯ
          НАЛАДИТЬ ВЗАИМОПОНИМАНИЕ МЕЖДУ РАЗРАБОТКОЙ И ЗАКАЗЧИКОМ, СОЕДИНЯЯ
          DIGITAL И СТРАТЕГИЮ КОМПАНИИ.
        </div>
      </div>
      {isHovered && (
        <div className="order__btn">
          <button
            style={{
              position: "fixed",
              left: pos.x,
              top: pos.y,
              transform: "translate(-50%, -50%)",
            }}
            onClick={onOpen}
          >
            Заказать проект
          </button>
        </div>
      )}
    </section>
  );
}

export default Order;