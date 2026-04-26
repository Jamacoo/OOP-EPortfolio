import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { useState, useEffect } from 'react';

const ImageModal = ({ isOpen, item, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
    setIsZoomed(false);
  }, [item, isOpen]);

  if (!item) return null;

  const images = Array.isArray(item.image) ? item.image : [item.image];
  const hasMultiple = images.length > 1;

  const handleNext = (e) => {
    e.stopPropagation();
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setIsZoomed(false);
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors z-[120]"
          >
            <X size={24} />
          </motion.button>

          {/* Navigation Buttons */}
          {hasMultiple && !isZoomed && (
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
            className={`relative w-full flex flex-col items-center gap-6 overflow-auto custom-scrollbar bg-card/50 rounded-3xl transition-all duration-500 ${isZoomed ? 'max-w-none h-screen rounded-none bg-black/40' : 'max-w-7xl max-h-[95vh]'}`}
          >
            <div 
              onClick={() => setIsZoomed(!isZoomed)}
              className={`relative flex flex-shrink-0 items-center justify-center p-8 transition-all duration-500 cursor-zoom-in ${isZoomed ? 'w-[200%] h-auto cursor-zoom-out' : 'w-full h-auto'}`}
            >
               <motion.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={images[currentIndex]}
                alt={`${item.name} - ${currentIndex + 1}`}
                className={`rounded-lg shadow-2xl border border-white/10 transition-transform duration-500 ${isZoomed ? 'w-full shadow-none border-none' : 'max-w-full max-h-[65vh] object-contain'}`}
              />
              
              {/* Zoom Indicator */}
              <div className="absolute bottom-12 right-12 bg-black/60 backdrop-blur-md text-white p-3 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
              </div>
            </div>

            {!isZoomed && (
              <div className="text-center space-y-4 max-w-2xl mx-auto px-4 pb-12">
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
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;