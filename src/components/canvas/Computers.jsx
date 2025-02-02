import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Model } from "../Scene"; // Import the Model from scene.jsx

const ComputersCanvas = () => {
  const canvasRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Media query to detect mobile screens
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    // Update mobile state on screen resize
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    const canvasElement = canvasRef.current?.children[0]; // Capture current ref value
    let gl;
    if (canvasElement) {
      gl = canvasElement.getContext("webgl");
    }

    return () => {
      if (gl) {
        const loseContext = gl.getExtension("WEBGL_lose_context");
        if (loseContext) {
          loseContext.loseContext();
        }
      }
      if (canvasElement) {
        canvasElement.remove(); // Remove canvas from DOM
      }
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <Canvas
      ref={canvasRef}
      frameloop="demand"
      shadows={!isMobile} // Disable shadows on mobile to boost performance
      camera={{ position: [20, 3, 5], fov: 25 }}
      dpr={isMobile ? 1 : [1, 2]} // Lower device pixel ratio on mobile
      gl={{ preserveDrawingBuffer: true }}
      onCreated={({ gl }) => {
        gl.domElement.style.maxHeight = "100vh"; // Canvas takes full height
        gl.domElement.style.display = "block"; // Display canvas properly
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Model component from scene.jsx */}
        <Model
          scale={isMobile ? 0.7 : 0.75}
          position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
