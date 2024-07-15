import React, { useEffect, useState } from 'react';

const Cursor = ({theme}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [hoverState, setHoverState] = useState(false);

  useEffect(() => {
    let trailFrame = null;

    const handleMouseMove = (e) => {
      // Immediate cursor position update
      setPosition({ x: e.clientX, y: e.clientY });

      // Throttled update for the trailing cursor
      cancelAnimationFrame(trailFrame);
      trailFrame = requestAnimationFrame(() => {
        setTrailPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleLinkHover = (hover) => {
      document.querySelectorAll('.link').forEach((link) => {
        link.addEventListener(hover ? 'mouseenter' : 'mouseleave', () => {
          setHoverState(hover);
        });
      });
    };

    // Apply hover state changes
    handleLinkHover(true);
    handleLinkHover(false);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(trailFrame);
    };
  }, []);

  const cursorStyle = theme === 'light' ? { borderColor: '#000', backgroundColor: '#000' } : { borderColor: '#fff', backgroundColor: '#fff' };


  return (
    <>
      <div
        className={`cursor outer ${hoverState ? 'hover' : ''}`}
        style={{ 
          ...cursorStyle,
          left: `${position.x}px`, 
          top: `${position.y}px` 
        }}
      ></div>
      <div
        className={`cursor inner ${hoverState ? 'hover' : ''}`}
        style={{
          ...cursorStyle,
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          transition: 'left .5s ease-out, top .5s ease-out', // Transition for the trailing effect
        }}
      ></div>
    </>
  );
};

export default Cursor;
