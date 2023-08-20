'use client'

import { Canvas, extend } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'

export default function App() {
    return (
        <Canvas camera={{ position: [0, 0, 2] }}>
            <mesh>
                <boxGeometry args={[1.0,1.0,1.0]} />
                <meshBasicMaterial color='red' />
            </mesh>
            <ambientLight intensity={0.5} />
            <directionalLight position={[150, 150, 150]} intensity={0.5} />
            <CameraControls />
        </Canvas>
    )
}