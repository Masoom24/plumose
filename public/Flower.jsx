import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Flower(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/flower.gltf");

  // Animate rotation & floating
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.3; // Rotate
      group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1; // Float up & down
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[26.436, 0, 392.129]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            geometry={nodes.plant_3_plant_3_blade_0.geometry}
            material={materials.plant_3_blade}
          />
          <mesh
            geometry={nodes.plant_3_plant_3_reed_0.geometry}
            material={materials.plant_3_reed}
          />
        </group>
        <mesh
          geometry={nodes.plant_1_plant_1_0.geometry}
          material={materials.plant_1}
          position={[-511.09, 4.406, -101.337]}
          rotation={[0, 1.317, -Math.PI / 2]}
          scale={89.732}
        />
        <mesh
          geometry={nodes.plant_2_plant_2_0.geometry}
          material={materials.plant_2}
          position={[401.634, -0.547, -30.927]}
          rotation={[0.295, 0.152, -1.617]}
          scale={[16.386, 22.195, 22.195]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/flower.gltf");
