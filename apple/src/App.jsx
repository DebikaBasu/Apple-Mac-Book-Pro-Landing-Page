import React from 'react';
import { Canvas } from "@react-three/fiber";


const App = () => {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
};

export default App;
