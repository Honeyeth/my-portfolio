"use client";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useRef, useState, useEffect } from "react";

export const BackgroundBeamsWithCollision = ({ children, className }) => {
  const containerRef = useRef(null);
  const parentRef = useRef(null);

  const beams = [
    { initialX: 50, translateX: 50, duration: 7, repeatDelay: 3, delay: 2 },
    { initialX: 300, translateX: 300, duration: 5, repeatDelay: 6, delay: 3 },
    { initialX: 600, translateX: 600, duration: 8, repeatDelay: 5, delay: 1, className: "h-20" },
    { initialX: 900, translateX: 900, duration: 6, repeatDelay: 7, delay: 4 },
    { initialX: 1200, translateX: 1200, duration: 10, repeatDelay: 4, className: "h-16" },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "absolute inset-0 w-full h-full overflow-hidden",
        "bg-gradient-to-b from-[#0a0a1a] to-[#050510]",
        className
      )}
    >
      {beams.map((beam, idx) => (
        <CollisionMechanism
          key={idx}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}

      {/* collision base line */}
      <div
        ref={containerRef}
        className="absolute bottom-0 w-full inset-x-0 pointer-events-none bg-[#0a0a1a]"
        style={{
          boxShadow:
            "0 -4px 20px rgba(0,0,50,0.6), 0 -2px 8px rgba(0,0,80,0.4) inset",
        }}
      />
    </div>
  );
};

const CollisionMechanism = ({ parentRef, containerRef, beamOptions = {} }) => {
  const beamRef = useRef(null);
  const [collision, setCollision] = useState(null);
  const [beamKey, setBeamKey] = useState(0);

  useEffect(() => {
    const checkCollision = () => {
      if (beamRef.current && containerRef.current && parentRef.current) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX = beamRect.left - parentRect.left + beamRect.width / 2;

          // 👇 blast hamesha neeche (end par) hoga, thoda sa upar adjust karne ke liye -40 px
          const relativeY = parentRect.height - 1;

          setCollision({ x: relativeX, y: relativeY });

          // restart beam after explosion finishes
          setTimeout(() => {
            setCollision(null);
            setBeamKey((prev) => prev + 1);
          }, 1500); // timing = explosion duration
        }
      }
    };

    const interval = setInterval(checkCollision, 40); // smoother check
    return () => clearInterval(interval);
  }, [beamKey, containerRef, parentRef]);

  return (
    <>
      {/* falling beam */}
      <motion.div
        key={beamKey}
        ref={beamRef}
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
        }}
        animate={{
          translateY: beamOptions.translateY || "1800px",
          translateX: beamOptions.translateX || "0px",
        }}
        transition={{
          duration: beamOptions.duration || 8,
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-0 top-0 m-auto h-14 w-[2px] rounded-full",
          "bg-gradient-to-t from-[#001F3F] via-[#004080] to-transparent",
          "shadow-[0_0_10px_rgba(0,64,128,0.8)]",
          beamOptions.className
        )}
      />

      {/* explosion on collision */}
      <AnimatePresence>
        {collision && (
          <Explosion
            key={`${collision.x}-${collision.y}`}
            style={{
              left: `${collision.x}px`,
              top: `${collision.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

/* 🔥 Smooth Explosion Animation */
const Explosion = (props) => {
  const spans = Array.from({ length: 25 }, (_, index) => ({
    id: index,
    directionX: Math.floor(Math.random() * 120 - 60),
    directionY: Math.floor(Math.random() * -100 - 40),
    scale: Math.random() * 1.2 + 0.6,
    duration: Math.random() * 1 + 0.6,
  }));

  return (
    <div {...props} className={cn("absolute z-50", props.className)}>
      {/* flash line */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.5 }}
        animate={{ opacity: 1, scaleX: 1.1 }}
        exit={{ opacity: 0, scaleX: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-[2px] w-16 rounded-full 
        bg-gradient-to-r from-transparent via-[#00aaff] to-transparent blur-sm"
      />

      {/* particles */}
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: 0, y: 0, opacity: 1, scale: span.scale }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
            scale: 0.2,
          }}
          transition={{
            duration: span.duration,
            ease: "easeOut",
          }}
          className="absolute h-2 w-2 rounded-full 
          bg-gradient-to-b from-[#00cfff] to-[#003366] 
          shadow-[0_0_8px_rgba(0,200,255,0.7)]"
        />
      ))}

      {/* glow pulse */}
      <motion.div
        initial={{ opacity: 0.7, scale: 0 }}
        animate={{ opacity: 0, scale: 2.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute h-10 w-10 rounded-full bg-[#00cfff]/40 blur-xl"
      />
    </div>
  );
};
