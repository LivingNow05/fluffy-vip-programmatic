import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedHeadingProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div';
  className?: string;
  accentWords?: string[];
  staggerDelay?: number;
  bounceOnHover?: boolean;
}

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(6px)',
    scale: 0.85
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      type: 'spring',
      damping: 14,
      stiffness: 220
    }
  }
};

const containerVariants = (staggerDelay: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.04
    }
  }
});

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  as = 'h2',
  className = '',
  accentWords = [],
  staggerDelay = 0.02,
  bounceOnHover = true
}) => {
  const words = text ? text.split(' ') : [];
  
  // Expand multi-word accents so all words within the city name (e.g. "Ciudad", "de", "Panamá") are recognized
  const normalizedAccents = accentWords
    .flatMap(w => w.split(' '))
    .map(w => w.replace(/[^\wáéíóúÁÉÍÓÚñÑüÜ]/gi, '').toLowerCase().trim())
    .filter(Boolean);

  const Tag = motion[as] as React.ElementType;

  return (
    <Tag
      key={text}
      className={`inline-block text-balance ${className}`}
      aria-label={text}
      initial="hidden"
      animate="visible"
      variants={containerVariants(staggerDelay)}
    >
      {words.map((word, wordIndex) => {
        const cleanWord = word.replace(/[^\wáéíóúÁÉÍÓÚñÑüÜ]/gi, '').toLowerCase();
        const isAccent = normalizedAccents.includes(cleanWord);

        return (
          <React.Fragment key={`${text}-w-${wordIndex}`}>
            <span className="inline-block whitespace-nowrap">
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={`${text}-c-${wordIndex}-${charIndex}`}
                  variants={letterVariants}
                  whileHover={
                    bounceOnHover
                      ? {
                          y: -10,
                          scale: 1.22,
                          rotate: (Math.random() - 0.5) * 14,
                          transition: { type: 'spring', stiffness: 500, damping: 10 }
                        }
                      : undefined
                  }
                  className={`inline-block select-none will-change-transform transition-colors duration-200 ${
                    isAccent
                      ? 'text-cornflower hover:text-emerald-400 dark:hover:text-emerald-300'
                      : 'hover:text-cornflower'
                  }`}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </React.Fragment>
        );
      })}
    </Tag>
  );
};
