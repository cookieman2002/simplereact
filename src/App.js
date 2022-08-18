import { motion } from "framer-motion";
import "./App.css";

function App() {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 2,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
    },
  };
  function onUpdate(latest) {
    console.log("complete");
  }
  return (
    <div className="App">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        onAnimationComplete={onUpdate}
      >
        <motion.h1 variants={item}>Hello</motion.h1>
        <motion.h1>Goodbye</motion.h1>
      </motion.div>
    </div>
  );
}

export default App;
