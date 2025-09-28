import { useRef } from 'react';

export const useDraggable = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const dragHandleRef = useRef<HTMLButtonElement>(null);

  const initDrag = () => {
    const el = elementRef.current;
    const handle = dragHandleRef.current;
    if (!el || !handle) return;
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    handle.onmousedown = (e) => {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = () => (document.onmouseup = document.onmousemove = null);
      document.onmousemove = (e) => {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        el.style.top = `${el.offsetTop - pos2}px`;
        el.style.left = `${el.offsetLeft - pos1}px`;
      };
    };
  };

  return {
    elementRef,
    dragHandleRef,
    initDrag,
  };
};
