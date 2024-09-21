import React from 'react';
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import MacContainer from './MacContainer';

const App = () => {
  return (
    <div className="w-full h-screen font-['Helvetica Now Display', sans-serif]">
      <div className="navbar line flex gap-10 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2">
        {[
          "iPhone",
          "iPad",
          "Services",
          "mac",
          "ios",
          "products",
          "iPhone",
          "iPad",
          "Services",
          "mac",
          "ios",
          "products"
        ].map(e =>
          <a href="" className="text-white font-[400] text-sm capitalize">
            {e}
          </a>)}
      </div>
      <div className="absolute flex flex-col items-center text-white top-32 left-1/2 -translate-x-1/2">
        <h3 className=" masked text-7xl tracking-tighter font-[700]">macbook pro.</h3>
        <h5>Oh so Pro!</h5>
        <p className="text-center w-3/4">
          The MacBook Pro delivers powerful performance, a stunning display, and all-day battery life-perfect for professionals on the go.
        </p>
      </div>

      <Canvas camera={{ fov: 18, position: [0, -16, 220] }}>
        <OrbitControls />
        <Environment files={[
          'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr'
        ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
