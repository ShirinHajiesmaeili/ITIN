import { motion } from "framer-motion";

const BackgroundColour = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-40 blur-xl"
          animate={{
            scale: [0.4, 0.8, 0.4],
            x: [Math.random() * 800 - 400, Math.random() * 800 - 400],
            y: [Math.random() * 600 - 300, Math.random() * 600 - 300],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8 + Math.random() * 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          style={{
            background: `${Math.random() > 0.5 ? "#037c92" : "#f7941c"}`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 50 + 30}px`,
            height: `${Math.random() * 50 + 30}px`,
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundColour;
