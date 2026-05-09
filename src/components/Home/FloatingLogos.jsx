import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, Sphere, Box, Torus, Cone } from '@react-three/drei'

function Shape({ children, position, speed = 1, rotationIntensity = 1, floatIntensity = 1 }) {
  return (
    <Float speed={speed} rotationIntensity={rotationIntensity} floatIntensity={floatIntensity} position={position}>
      {children}
    </Float>
  )
}

function FloatingShapes() {
  const materialProps = {
    color: '#3b82f6',
    metalness: 0.8,
    roughness: 0.2,
    envMapIntensity: 1,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  }

  const goldMaterialProps = {
    ...materialProps,
    color: '#fbbf24',
  }

  const darkMaterialProps = {
    ...materialProps,
    color: '#0ea5e9',
  }

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Environment preset="city" />
      
      {/* Central-ish shapes */}
      <Shape position={[-4, 2, -5]} floatIntensity={2} speed={2}>
        <Sphere args={[1, 32, 32]}>
          <meshPhysicalMaterial {...materialProps} transmission={0.5} thickness={0.5} />
        </Sphere>
      </Shape>
      
      <Shape position={[5, -1, -3]} floatIntensity={1.5} speed={1.5}>
        <Box args={[1.5, 1.5, 0.2]}>
           <meshPhysicalMaterial {...goldMaterialProps} />
        </Box>
      </Shape>

      <Shape position={[-5, -2, -6]} floatIntensity={2} speed={1}>
        <Torus args={[0.8, 0.2, 16, 32]}>
          <meshPhysicalMaterial {...darkMaterialProps} />
        </Torus>
      </Shape>

      <Shape position={[3, 3, -4]} floatIntensity={3} speed={2}>
        <Cone args={[1, 1.5, 32]}>
          <meshPhysicalMaterial {...materialProps} wireframe />
        </Cone>
      </Shape>
    </>
  )
}

export default function FloatingLogos() {
  return (
    <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <FloatingShapes />
      </Canvas>
    </div>
  )
}
