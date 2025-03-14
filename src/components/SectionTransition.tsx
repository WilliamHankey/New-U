
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSection } from '../context/SectionContext';

interface SectionTransitionProps {
  wellnessContent: React.ReactNode;
  inchContent: React.ReactNode;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({
  wellnessContent,
  inchContent,
}) => {
  const { currentSection } = useSection();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentSection]);

  const variants = {
    initial: (isWellness: boolean) => ({
      x: isWellness ? -100 : 100,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (isWellness: boolean) => ({
      x: isWellness ? 100 : -100,
      opacity: 0,
      transition: {
        x: { duration: 0.3 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <div className="relative w-full overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentSection}
          custom={currentSection === 'wellness'}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full"
        >
          {currentSection === 'wellness' ? wellnessContent : inchContent}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SectionTransition;
