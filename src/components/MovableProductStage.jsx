import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Move, Play, Pause } from 'lucide-react';

const HERO_SPICES = [
  {
    id: 'prod-1',
    slug: 'lal-mirch-masala',
    name: 'Lal Mirch Masala',
    hindiName: 'लाल मिर्च पाउडर',
    accentColor: '#D1255C',
    glowColor: 'rgba(209, 37, 92, 0.45)',
    price: 145,
    weight: '250g',
    image: '/assets/products/product-1.png',
    badge: 'Flagship Best Seller',
    description: 'Vibrant scarlet hue and signature pungency from slow-milled whole chillies.'
  },
  {
    id: 'prod-2',
    slug: 'haldi-powder',
    name: 'Haldi Powder',
    hindiName: 'हल्दी पाउडर',
    tag: 'Salem High Curcumin 5%+',
    accentColor: '#E6A817',
    glowColor: 'rgba(230, 168, 23, 0.55)',
    price: 120,
    weight: '250g',
    image: '/assets/products/product-2.png',
    badge: 'Golden Purity',
    description: 'Selected golden Salem rhizomes rich in natural essential curcumin.'
  },
  {
    id: 'prod-3',
    slug: 'dhaniya-powder',
    name: 'Dhaniya Powder',
    hindiName: 'धनिया पाउडर',
    tag: 'Cold-Milled Citrus Notes',
    accentColor: '#3B5838',
    glowColor: 'rgba(59, 88, 56, 0.45)',
    price: 110,
    weight: '250g',
    image: '/assets/products/product-3.png',
    badge: 'Aromatic Reserve',
    description: 'Sun-cured green coriander seeds cold-milled to lock in refreshing citrus aromas.'
  },
  {
    id: 'prod-4',
    slug: 'jeera-powder',
    name: 'Jeera Powder',
    hindiName: 'जीरा पाउडर',
    tag: 'Artisanal Pan-Roasted',
    accentColor: '#8C2F16',
    glowColor: 'rgba(140, 47, 22, 0.5)',
    price: 195,
    weight: '250g',
    image: '/assets/products/product-4.png',
    badge: 'Smoky Essence',
    description: 'Toasted in small batches on cast-iron plates for deep earthy fragrance.'
  }
];

const MovableProductStage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
    const stageRef = useRef(null);
  const resumeTimerRef = useRef(null);

  // Viewport resize tracking for perfect responsive 3D spacing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse Parallax & 3D Tilt Coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth Springs for fluid cursor physics
  const springConfig = { damping: 25, stiffness: 140 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], isMobile ? [-8, 8] : [-14, 14]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], isMobile ? [-6, 6] : [-10, 10]);

  // INFINITE AUTONOMOUS ROTATION LOOP (Cycles through all products endlessly)
  useEffect(() => {
    if (isPaused || isDragging) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SPICES.length);
    }, 4200);

    return () => clearInterval(interval);
  }, [isPaused, isDragging]);

  // User interaction temporarily pauses auto-rotation, then automatically resumes
  const handleUserInteract = () => {
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 7000);
  };

  const handleMouseMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const activeProduct = HERO_SPICES[activeIndex];

  // Responsive offsets: ensures every pouch has breathing room and packaging art is visible
  const sideOffset = isMobile ? 85 : 135;
  const farOffset = isMobile ? 145 : 210;
  const sideScale = isMobile ? 0.80 : 0.85;
  const farScale = isMobile ? 0.65 : 0.72;

  return (
    <div
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-2xl mx-auto flex flex-col items-center justify-center select-none py-2"
    >

      {/* 2. 3D FLOATING PRODUCT STAGE (POUCHES COMPLETELY UNOBSTRUCTED) */}
      <motion.div
        animate={{
          y: [-8, 6, -8],
          rotateZ: [-1, 1, -1],
          rotateX: [-2, 2, -2]
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          rotateX,
          rotateY,
          translateX,
          translateY,
          transformStyle: 'preserve-3d',
          perspective: 1100
        }}
        className="relative w-full h-[280px] sm:h-[350px] lg:h-[380px] flex items-center justify-center"
      >
        {/* Dynamic Infinite Ambient Spice Aura Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.35, 0.6, 0.35]
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl pointer-events-none transition-colors duration-1000"
          style={{ backgroundColor: activeProduct.glowColor }}
        />

        {/* Floating Ambient Floor Shadow on Parchment */}
        <motion.div
          animate={{
            scale: [0.94, 1.06, 0.94],
            opacity: [0.25, 0.4, 0.25]
          }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-2 sm:bottom-4 w-60 sm:w-80 h-7 bg-[#4A121A]/35 rounded-[100%] blur-md pointer-events-none transform -rotate-1"
        />

        {/* Rising Golden Spice Dust Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [10, -130],
              x: [0, (i % 2 === 0 ? 18 : -18), 0],
              opacity: [0, 0.8, 0],
              scale: [0.6, 1.2, 0.6]
            }}
            transition={{
              duration: 3.2 + i * 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.55
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#E85A18] pointer-events-none"
            style={{
              left: `${20 + i * 15}%`,
              bottom: '15%'
            }}
          />
        ))}

        {/* All 4 Spices in an Elegant 3D Fan (Nothing Covering Front of Jars) */}
        {HERO_SPICES.map((spice, idx) => {
          const isCurrent = idx === activeIndex;

          let offset = idx - activeIndex;
          if (offset < -1) offset += HERO_SPICES.length;
          if (offset > 2) offset -= HERO_SPICES.length;

          let xOffset = 0;
          let scale = 1;
          let zIndex = 20;
          let opacity = 1;
          let rotateZ = 0;

          if (isCurrent) {
            xOffset = 0;
            scale = 1.08;
            zIndex = 30;
            opacity = 1;
            rotateZ = 0;
          } else if (offset === -1 || offset === 3) {
            xOffset = -sideOffset;
            scale = sideScale;
            zIndex = 15;
            opacity = 0.85;
            rotateZ = -6;
          } else if (offset === 1) {
            xOffset = sideOffset;
            scale = sideScale;
            zIndex = 15;
            opacity = 0.85;
            rotateZ = 6;
          } else {
            xOffset = offset > 0 ? farOffset : -farOffset;
            scale = farScale;
            zIndex = 10;
            opacity = 0.55;
            rotateZ = offset > 0 ? 10 : -10;
          }

          return (
            <motion.div
              key={spice.id}
              onClick={() => {
                handleUserInteract();
                setActiveIndex(idx);
              }}
              animate={{
                x: xOffset,
                scale,
                zIndex,
                opacity,
                rotate: rotateZ,
                y: isCurrent ? [-6, 6, -6] : [-3, 3, -3]
              }}
              transition={{
                x: { type: 'spring', stiffness: 220, damping: 24 },
                scale: { duration: 0.45 },
                opacity: { duration: 0.35 },
                rotate: { duration: 0.45 },
                y: {
                  duration: isCurrent ? 3.6 : 4.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: idx * 0.45
                }
              }}
              drag={isCurrent}
              dragConstraints={
                isMobile
                  ? { left: -70, right: 70, top: -40, bottom: 40 }
                  : { left: -120, right: 120, top: -70, bottom: 70 }
              }
              dragElastic={0.25}
              onDragStart={() => {
                setIsDragging(true);
                handleUserInteract();
              }}
              onDragEnd={() => {
                setIsDragging(false);
                handleUserInteract();
              }}
              whileDrag={{ scale: 1.15, cursor: 'grabbing' }}
              className={`absolute cursor-pointer flex flex-col items-center justify-center transition-shadow ${
                isCurrent ? 'cursor-grab active:cursor-grabbing' : 'hover:opacity-100'
              }`}
            >
              {/* Product Pouch Packaging (Full unobstructed visibility) */}
              <div className="relative group">
                <img
                  src={spice.image}
                  alt={spice.name}
                  className={`max-h-[210px] sm:max-h-[280px] lg:max-h-[310px] w-auto object-contain filter drop-shadow-2xl transition-all duration-500 ${
                    isCurrent ? 'brightness-105' : 'brightness-90 contrast-95'
                  }`}
                  draggable={false}
                />

                {/* Subtle Sheen Highlight */}
                {isCurrent && (
                  <motion.div
                    animate={{ opacity: [0.1, 0.25, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none rounded-2xl"
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* 4. INFINITE PRODUCT SELECTOR PILLS */}
      <div className="mt-6 sm:mt-8 flex items-center justify-center flex-wrap gap-2 z-20">
        {HERO_SPICES.map((spice, idx) => {
          const isSelected = idx === activeIndex;
          return (
            <button
              key={spice.id}
              onClick={() => {
                handleUserInteract();
                setActiveIndex(idx);
              }}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-[#FCE74C] text-[#4A121A] shadow-md ring-2 ring-[#4A121A]/30 scale-105'
                  : 'bg-[#FFFDF9] text-[#4A121A] hover:text-[#E85A18] hover:bg-[#FCE74C]/30 border border-[#4A121A]/20 shadow-xs'
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: spice.accentColor }}
              />
              <span>{spice.name}</span>
            </button>
          );
        })}
      </div>

    </div>
  );
};

export default MovableProductStage;
