"use client";

import React, { useRef, useMemo } from "react";
import { useInView } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;

  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    
    // Create organic movement
    float t = uTime * 0.1;
    
    vec2 p1 = vec2(sin(t), cos(t * 1.2)) * 0.5 + 0.5;
    vec2 p2 = vec2(cos(t * 0.8), sin(t * 1.5)) * 0.5 + 0.5;
    vec2 p3 = vec2(sin(t * 1.4), cos(t * 0.7)) * 0.5 + 0.5;
    
    float d1 = 1.0 - distance(uv, p1);
    float d2 = 1.0 - distance(uv, p2);
    float d3 = 1.0 - distance(uv, p3);
    
    d1 = pow(d1, 3.0);
    d2 = pow(d2, 3.0);
    d3 = pow(d3, 3.0);
    
    vec3 color1 = vec3(0.35, 0.13, 0.58); // #5A2193
    vec3 color2 = vec3(0.85, 0.20, 0.31); // #DA334F
    vec3 color3 = vec3(0.91, 0.34, 0.17); // #E9572C
    
    vec3 finalColor = color1 * d1 + color2 * d2 + color3 * d3;
    finalColor /= (d1 + d2 + d3 + 0.1);
    
    // Mouse interaction
    float mouseDist = 1.0 - distance(uv, uMouse);
    finalColor += color2 * pow(mouseDist, 10.0) * 0.1;
    
    gl_FragColor = vec4(finalColor, 0.08);
  }
`;

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;


function ShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    }),
    [size]
  );

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.getElapsedTime();
      material.uniforms.uMouse.value.set(
        state.mouse.x * 0.5 + 0.5,
        state.mouse.y * 0.5 + 0.5
      );
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        transparent
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function HeroShader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 opacity-40">
      {isInView && (
        <Canvas
          camera={{ position: [0, 0, 1], fov: 45 }}
          style={{ background: "transparent" }}
          dpr={1} // Optimize for performance on high-DPI screens
          gl={{ powerPreference: "high-performance", antialias: false }}
        >
          <ShaderPlane />
        </Canvas>
      )}
    </div>
  );
}
