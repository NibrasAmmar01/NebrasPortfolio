import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useTexture, Decal, Float } from "@react-three/drei";
import PropTypes from "prop-types";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

const BallCanvas = ({ icon }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvasElement = canvasRef.current?.children[0]; // Capture current ref value

    let renderer;
    if (canvasElement) {
      renderer = canvasElement.getContext("webgl");
    }

    return () => {
      if (renderer) {
        renderer.forceContextLoss(); // Lose WebGL context
        renderer.dispose(); // Dispose renderer
      }
      if (canvasElement) {
        canvasElement.remove(); // Remove canvas from DOM
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <Canvas
      ref={canvasRef}
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default BallCanvas;
