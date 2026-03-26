import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            background: 'linear-gradient(135deg, #0A0A1A 0%, #1a1a3e 50%, #0A0A1A 100%)',
          }}
        >
          {/* Animated rings */}
          <Box sx={{ position: 'relative', width: 100, height: 100, mb: 4 }}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: 60 + i * 20,
                  height: 60 + i * 20,
                  borderRadius: '50%',
                  border: '2px solid rgba(108, 99, 255, 0.3)',
                  borderTopColor: '#6C63FF',
                  x: '-50%',
                  y: '-50%',
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.5 + i * 0.3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ))}
            <motion.div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 16,
                height: 16,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6C63FF, #00D9FF)',
                x: '-50%',
                y: '-50%',
              }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #6C63FF, #00D9FF)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                letterSpacing: 2,
              }}
            >
              {'<KR />'}
            </Typography>
          </motion.div>

          {/* Progress bar */}
          <Box sx={{ width: 200, mt: 3 }}>
            <motion.div
              style={{
                height: 3,
                borderRadius: 2,
                background: 'linear-gradient(90deg, #6C63FF, #00D9FF)',
              }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
