'use client'

import { Canvas } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'
import Boxes from './Boxes'

export default function App() {
    return (
        <Canvas camera={{ position: [0, 0, 0.01] }}>
            <ambientLight intensity={0.85} />
            <directionalLight position={[150, 150, 150]} intensity={1} />
            <Boxes 
                length={100000} 
                size={[0.15,0.15,0.15]} />
            <CameraControls />
        </Canvas>
    )
}