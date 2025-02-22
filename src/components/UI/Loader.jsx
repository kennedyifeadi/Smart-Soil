import { motion } from 'framer-motion';

export const Loader = () => {
  return (
    <div className="flex items-center justify-center w- full h-full">
      <motion.div
        className="flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-5 h-5 bg-[#cfdf32] rounded-full"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

