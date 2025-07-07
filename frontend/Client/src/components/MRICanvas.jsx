import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const MRICanvas = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>3D Visualization</p>
        <h2 className={styles.sectionHeadText}>MRI Scan Analysis.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Explore the 3D visualization of MRI scan analysis. Our advanced AI model processes the scan data to identify potential abnormalities and provide detailed insights.
      </motion.div>

      <div className='mt-10 h-[500px] w-full'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <OrbitControls enableZoom={true} />
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
            </mesh>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default SectionWrapper(MRICanvas, "mri-canvas"); 