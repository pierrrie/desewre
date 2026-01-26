import React, { useEffect, useRef } from 'react';
import '../css/Rain.css';

interface RainProps {
  dropCount?: number;
}

const Rain: React.FC<RainProps> = ({ dropCount = 400 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Исправленная функция randRange
  const randRange = (minNum: number, maxNum: number): number => {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  };

  useEffect(() => {
    const createRain = () => {
      const container = containerRef.current;
      if (!container) return;

      // Очищаем предыдущие капли
      container.innerHTML = '';

      // Создаем новые капли
      for (let i = 1; i <= dropCount; i++) {
        const drop = document.createElement('div');
        drop.className = 'drop';
        
        // Случайная позиция - исправленные значения
        const dropLeft = randRange(0, window.innerWidth);
        const dropTop = randRange(-1000, -100); // Изменен диапазон
        
        drop.style.left = `${dropLeft}px`;
        drop.style.top = `${dropTop}px`;
        
        // Добавляем случайную задержку для более натурального вида
        drop.style.animationDelay = `${Math.random() * 2}s`;
        
        container.appendChild(drop);
      }
    };

    createRain();

    const handleResize = () => {
      createRain();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dropCount]);

  return <div className="rain" ref={containerRef} />;
};

export default Rain;