import { useEffect, useRef, useState } from "react";
import "./App.css";
import { useInView } from "framer-motion";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import { motion } from "framer-motion";

function App() {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  const aboutReff = useRef(null);
  const expReff = useRef(null);
  const projectReff = useRef(null);

  const aboutIsInView = useInView(aboutReff);
  const expIsInView = useInView(expReff);
  const projectIsInView = useInView(projectReff);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX - 2250,
        y: e.clientY - 2250,
      });
      // console.log(mousePos);
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.addEventListener("mousemove", mouseMove);
    };
  }, []);

  const variant = {
    default: {
      x: mousePos.x,
      y: mousePos.y,
    },
  };

  return (
    <div className="h-[300vh] w-auto flex justify-center bg-color-background">
      <div className="flex absolute justify-center gap-[8rem] max-w-[100vw] w-[98.7vw] z-20 bg-transparent">
        <LeftPanel
          aboutIsInView={aboutIsInView}
          expIsInView={expIsInView}
          projectIsInView={projectIsInView}
        />
        <RightPanel
          aboutReff={aboutReff}
          expReff={expReff}
          projectReff={projectReff}
        />
      </div>
      <motion.div
        variants={variant}
        transition={{ ease : "linear", duration: 0.3 , type: "spring" }}
        animate="default"
        className="grad w-[4500px] h-[4500px] rounded-full fixed top-0 left-0 z-1 "
      />
    </div>
  );
}

export default App;
