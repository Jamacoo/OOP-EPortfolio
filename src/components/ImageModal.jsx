import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const ImageModal = ({ isOpen, item, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when modal opens with a new item
  useEffect(() => {
    setCurrentIndex(0);
  }, [item]);

  if (!item) return null;

  const images = Array.isArray(item.image) ? item.image : [item.image];
  const hasMultiple = images.length > 1;

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md cursor-zoom-out"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors z-[110]"
          >
            <X size={24} />
          </motion.button>

          {/* Navigation Buttons */}
          {hasMultiple && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 z-[110] p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 z-[110] p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full flex flex-col items-center gap-6"
          >
            <div className="relative group flex items-center justify-center">
               <motion.img
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                src={images[currentIndex]}
                alt={`${item.name} - ${currentIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
            </div>

            <div className="text-center space-y-4 max-w-2xl mx-auto px-4 pb-8">
              <div className="space-y-1">
                <h3 className="text-white text-xl font-bold">{item.name}</h3>
                <p className="text-white/50 text-sm">{item.date}</p>
                {hasMultiple && (
                  <p className="text-primary font-medium text-sm pt-1">
                    Image {currentIndex + 1} of {images.length}
                  </p>
                )}
              </div>

              {(item.explanation || item.learning) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left border-t border-white/10 pt-4 mt-2">
                  {item.explanation && (
                    <div className="space-y-1">
                      <p className="text-primary text-xs font-bold uppercase tracking-widest">Explanation</p>
                      <p className="text-white/80 text-sm leading-relaxed">{item.explanation}</p>
                    </div>
                  )}
                  {item.learning && (
                    <div className="space-y-1">
                      <p className="text-green-400 text-xs font-bold uppercase tracking-widest">Learning</p>
                      <p className="text-white/80 text-sm leading-relaxed">{item.learning}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;