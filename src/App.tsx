import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "./features/box/Box";
import { Plane, Vector3 } from "three";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
      <planeHelper plane={new Plane(new Vector3(0, 1, 0))} size={10} />
      <axesHelper scale={1} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />;
      <Box position={[1.2, 0, 0]} />;
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.75}
      />
    </Canvas>
  );
}

export default App;
