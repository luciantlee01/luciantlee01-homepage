import React, { useEffect, useState } from 'react';
import { useColorMode } from '@chakra-ui/react';

const Cursor = () => {
  const { colorMode } = useColorMode();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [hoverState, setHoverState] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleLinkHover = (hover) => {
      document.querySelectorAll('.link').forEach((link) => {
        link.addEventListener(hover ? 'mouseenter' : 'mouseleave', () => {
          setHoverState(hover);
        });
      });
    };

    handleLinkHover(true);
    handleLinkHover(false);

    window.addEventListener('mousemove', handleMouseMove);

    const updateTrailPosition = () => {
      setTrailPosition((prevTrailPosition) => {
        const dx = position.x - prevTrailPosition.x;
        const dy = position.y - prevTrailPosition.y;
        const newTrailPosition = {
          x: prevTrailPosition.x + dx * 0.1,
          y: prevTrailPosition.y + dy * 0.1
        };
        return newTrailPosition;
      });
      requestAnimationFrame(updateTrailPosition);
    };

    updateTrailPosition();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [position]);

  const darkCursor = (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  );

  const lightCursor = (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="18" stroke="black" strokeWidth="2" fill="none" />
    </svg>
  );

  const darkInnerCursor = (
    <svg width="20" height="20" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="8" fill="white" />
    </svg>
  );

  const lightInnerCursor = (
    <svg width="20" height="20" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="8" fill="black" />
    </svg>
  );

  return (
    <>
      <div
        className={`cursor outer ${hoverState ? 'hover' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          zIndex: 9999, // Ensure the custom cursor is on top
        }}
      >
        {colorMode === 'dark' ? darkCursor : lightCursor}
      </div>
      <div
        className={`cursor inner ${hoverState ? 'hover' : ''}`}
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          zIndex: 9999, // Ensure the custom cursor is on top
        }}
      >
        {colorMode === 'dark' ? darkInnerCursor : lightInnerCursor}
      </div>
    </>
  );
};

export default Cursor;
