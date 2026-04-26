import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const Final = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6">
      <motion.div
        animate={{ 
          rotate: [0, 10, -10, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center"
      >
        <Lock size={40} className="text-muted-foreground" />
      </motion.div>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Final Requirements</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Content for the finals period is currently locked and will be updated as the semester progresses.
        </p>
      </div>
      <div className="w-full max-w-md bg-muted h-2 rounded-full overflow-hidden">
        <div className="bg-primary w-1/4 h-full" />
      </div>
      <p className="text-xs font-medium text-primary uppercase tracking-widest">Stay Tuned</p>
    </div>
  );
};

export default Final;