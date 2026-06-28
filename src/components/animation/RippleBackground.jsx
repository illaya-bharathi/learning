import React, { useState, useEffect, useRef } from "react";

const RippleBackground = () => {
  const [ripples, setRipples] = useState([]);
  const rippleIdRef = useRef(0);

  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Calculate coordinates relative to the viewport
      const x = e.clientX;
      const y = e.clientY;

      const newRipple = {
        x,
        y,
        id: rippleIdRef.current++,
        timestamp: Date.now()
      };

      setRipples(prev => [...prev, newRipple]);

      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 2000);
    };

    // Use capture phase to catch clicks even if propagation is stopped
    window.addEventListener('click', handleGlobalClick, true);

    return () => {
      window.removeEventListener('click', handleGlobalClick, true);
    };
  }, []);


  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        {/* Ripple effects */}
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="absolute inset-0 rounded-full border-[1.5px] border-[#00EDC2]/40 animate-ripple" />
            <div
              className="absolute inset-0 rounded-full border-[1.5px] border-[#00EDC2]/20 animate-ripple"
              style={{ animationDelay: '0.2s' }}
            />
            <div
              className="absolute inset-0 rounded-full border-[1.5px] border-[#00EDC2]/10 animate-ripple"
              style={{ animationDelay: '0.4s' }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ripple {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            width: 400px;
            height: 400px;
            opacity: 0;
          }
        }
        
        .animate-ripple {
          animation: ripple 2s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default RippleBackground;
