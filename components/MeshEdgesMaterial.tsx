import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import vertexShader from '@/shaders/vertex.glsl'
import fragmentShader from '@/shaders/fragment.glsl'

const MeshEdgesMaterial = shaderMaterial(
    {
      color: new THREE.Color('white'),
      size: new THREE.Vector3(1, 1, 1),
      thickness: 0.01,
      smoothness: 0.2
    },
    vertexShader,
    fragmentShader
  )

extend({ MeshEdgesMaterial })
