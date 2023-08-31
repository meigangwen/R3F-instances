import { useRef, useMemo, useLayoutEffect } from 'react'
import niceColors from 'nice-color-palettes'
import * as THREE from 'three'
//import { extend } from '@react-three/fiber'
import './MeshEdgesMaterial'

export default function Boxes( {length, size, ...props } ) {

    //define an empty 3D object
    const o = new THREE.Object3D()
    
    //define an array of colors
    const c = new THREE.Color()
    const colors = useMemo(() => new Float32Array(Array.from({ length }, () => c.set(niceColors[17][Math.floor(Math.random() * 5)]).toArray()).flat()), [length])

    const instanceRef = useRef()
    const outlinesRef = useRef()

    useLayoutEffect(() => {
        let i = 0
        const root = Math.round(Math.pow(length, 1 / 3))
        const halfRoot = root / 2
        for (let x = 0; x < root; x++)
        for (let y = 0; y < root; y++)
            for (let z = 0; z < root; z++) {
            const id = i++
            o.rotation.set(Math.random(), Math.random(), Math.random())
            o.position.set(halfRoot - x + Math.random(), halfRoot - y + Math.random(), halfRoot - z + Math.random())
            o.updateMatrix()
            instanceRef.current.setMatrixAt(id, o.matrix)
            }
        instanceRef.current.instanceMatrix.needsUpdate = true
        
        // set the matrix for the outlines geometry
        outlinesRef.current.geometry = instanceRef.current.geometry
        outlinesRef.current.instanceMatrix = instanceRef.current.instanceMatrix
    }, [length])

    //<meshEdgesMaterial transparent polygonOffset polygonOffsetFactor={-10} size={size} color="black" thickness={0.001} smoothness={0.005} />

    return (
        <group {...props}>
            <instancedMesh ref={instanceRef} args={[null, null, length]}>
                <boxGeometry args={size}>
                    <instancedBufferAttribute attach="attributes-color" args={[colors, 3]} />
                </boxGeometry>
                <meshLambertMaterial vertexColors toneMapped={false} />
            </instancedMesh>
            
            <instancedMesh ref={outlinesRef} args={[null, null, length]}>
                <meshEdgesMaterial transparent polygonOffset polygonOffsetFactor={-10} size={size} color="black" thickness={0.001} smoothness={0.005} />
            </instancedMesh>


        </group>
    )
}