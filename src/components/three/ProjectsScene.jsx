import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import DemoComputer from '../DemoComputer.jsx';
import CanvasLoader from '../Loading.jsx';
import { useCanvasDpr } from '../../hooks/useCanvasDpr.js';

const ProjectsScene = ({ texture }) => {
  const dpr = useCanvasDpr(1.5);

  return (
    <Canvas dpr={dpr} gl={{ powerPreference: 'high-performance' }}>
      <ambientLight intensity={Math.PI} />
      <directionalLight position={[10, 10, 5]} />
      <Center>
        <Suspense fallback={<CanvasLoader />}>
          <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
            <DemoComputer texture={texture} />
          </group>
        </Suspense>
      </Center>
      <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
    </Canvas>
  );
};

export default ProjectsScene;
