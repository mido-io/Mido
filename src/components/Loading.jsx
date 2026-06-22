import { Html } from '@react-three/drei';

const CanvasLoader = () => {
  return (
    <Html center>
      <div className="canvas-loader flex items-center">
        <span className="canvas-loader-bar" />
        <span className="canvas-loader-bar canvas-loader-bar--middle" />
        <span className="canvas-loader-bar canvas-loader-bar--last" />
      </div>
    </Html>
  );
};

export default CanvasLoader;
