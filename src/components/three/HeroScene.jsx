import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, Float, OrbitControls, useGLTF, Environment } from '@react-three/drei';

import { assets } from '../../constants/assets.js';
import { useCanvasDpr } from '../../hooks/useCanvasDpr.js';

const MODEL_PATH = assets.models.hero;

function Model() {
  const { scene } = useGLTF(MODEL_PATH);

  return (
    <Center>
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.35}>
        <primitive object={scene} scale={0.8} />
      </Float>
    </Center>
  );
}

useGLTF.preload(MODEL_PATH);

const HeroScene = () => {
  const dpr = useCanvasDpr(1.5);

  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 0, 3], fov: 32 }} dpr={dpr} gl={{ powerPreference: 'high-performance' }}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <directionalLight position={[-4, 2, 2]} intensity={0.8} color="#8fb7ff" />
      <directionalLight position={[0, -3, -4]} intensity={0.35} color="#ffcc99" />
      <spotLight position={[0, 5, 3]} intensity={1.5} angle={0.35} penumbra={1} />
      <Environment preset="studio" />

      <Suspense fallback={null}>
        <Model />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.8}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
};

export default HeroScene;
