"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function createStarShape() {
  const shape = new THREE.Shape();

  const outerRadius = 1;
  const innerRadius = 0.43;

  for (let i = 0; i < 10; i++) {
    const angle = (i * Math.PI) / 5 - Math.PI / 2;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    if (i === 0) {
      shape.moveTo(x, y);
    } else {
      shape.lineTo(x, y);
    }
  }

  shape.closePath();

  return shape;
}

function StarModel({ mouse }) {
  const starRef = useRef(null);

  const geometryArgs = useMemo(
    () => [
      createStarShape(),
      {
        depth: 0.3,
        bevelEnabled: true,
        bevelThickness: 0.07,
        bevelSize: 0.06,
        bevelSegments: 5,
        curveSegments: 24,
      },
    ],
    []
  );

  useFrame((_, delta) => {
    if (!starRef.current) return;

    // Курсор относительно ВСЕГО section
const targetX = -mouse.y * 0.45;
const targetY = mouse.x * 0.65;

    // Плавное следование
    starRef.current.rotation.x = THREE.MathUtils.damp(
      starRef.current.rotation.x,
      targetX,
      3,
      delta
    );

    starRef.current.rotation.y = THREE.MathUtils.damp(
      starRef.current.rotation.y,
      targetY,
      3,
      delta
    );

    // Очень лёгкое постоянное вращение
    starRef.current.rotation.z += delta * 0.08;
  });

  return (
    <Float
      speed={1}
      floatIntensity={0.15}
      rotationIntensity={0}
    >
      <mesh
        ref={starRef}
        scale={1.15}
      >
        <extrudeGeometry args={geometryArgs} />

        <meshPhysicalMaterial
          color="#eaf6ff"
          metalness={0.75}
          roughness={0.13}
          transmission={0.18}
          thickness={0.7}
          ior={1.45}
          clearcoat={1}
          clearcoatRoughness={0.08}
          emissive="#8ed8ff"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

export default function CursorStar({ mouse }) {
  return (
    <div
      className="pointer-events-none relative h-[340px] w-[340px] md:h-[440px] md:w-[440px]"
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0, 4.8],
          fov: 40,
        }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <ambientLight intensity={1.2} />

        <directionalLight
          position={[3, 5, 5]}
          intensity={2.5}
        />

        <pointLight
          position={[-3, 1, 3]}
          intensity={4}
          distance={7}
          color="#a9e4ff"
        />

        <pointLight
          position={[3, -3, -2]}
          intensity={2}
          distance={6}
          color="#8b9cff"
        />

        <Environment preset="city" />

        <StarModel mouse={mouse} />
      </Canvas>
    </div>
  );
}