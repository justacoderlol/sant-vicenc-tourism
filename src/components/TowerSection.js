import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmark,
  faArrowsAlt,
  faSearchPlus,
  faCamera,
  faCube,
} from "@fortawesome/free-solid-svg-icons";
import towerImage from "../assets/images/gallery/tower-can-valls.jpg";
import "../styles/TowerSection.css";

const TOWER_COLORS = {
  mainBody: "#c9a882",
  topPart: "#bfa076",
  battlements: "#a89060",
  windows: "#2a1a0a",
  door: "#3d2010",
  flagPole: "#4a3020",
  flag: "#c41e3a",
  ground: "#4a7c23",
  bushes: "#2d5a1d",
  skyLight: "#87CEEB",
  pointLight: "#ffd700",
};

function Tower() {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group>

        {/* Main body */}
        <mesh position={[0, 2.5, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.1, 1.3, 5, 32]} />
          <meshStandardMaterial
            color={TOWER_COLORS.mainBody}
            roughness={0.9}
            metalness={0.1}
          />
        </mesh>

        {/* Top part */}
        <mesh position={[0, 5.3, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.0, 1.1, 0.8, 32]} />
          <meshStandardMaterial
            color={TOWER_COLORS.topPart}
            roughness={0.9}
            metalness={0.1}
          />
        </mesh>

        {/* Battlements */}
        {[...Array(16)].map((_, i) => {
          const angle = (i / 16) * Math.PI * 2;
          const x = Math.cos(angle) * 0.95;
          const z = Math.sin(angle) * 0.95;
          return (
            <mesh
              key={i}
              position={[x, 5.9, z]}
              rotation={[0, angle, 0]}
              castShadow
            >
              <boxGeometry args={[0.25, 0.45, 0.18]} />
              <meshStandardMaterial
                color={TOWER_COLORS.battlements}
                roughness={0.9}
              />
            </mesh>
          );
        })}

        {/* Window */}
        <mesh position={[0, 3, 1.2]} castShadow>
          <boxGeometry args={[0.35, 0.6, 0.15]} />
          <meshStandardMaterial color={TOWER_COLORS.windows} />
        </mesh>

        {/* Second window */}
        <mesh
          position={[1.15, 2, 0.3]}
          rotation={[0, Math.PI / 3, 0]}
          castShadow
        >
          <boxGeometry args={[0.25, 0.4, 0.12]} />
          <meshStandardMaterial color={TOWER_COLORS.windows} />
        </mesh>

        {/* Door */}
        <mesh position={[0, 0.7, 1.25]} castShadow>
          <boxGeometry args={[0.6, 1.4, 0.12]} />
          <meshStandardMaterial color={TOWER_COLORS.door} roughness={0.8} />
        </mesh>

        {/* Flag */}
        <mesh position={[0, 6.5, 0]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 1.2, 8]} />
          <meshStandardMaterial color={TOWER_COLORS.flagPole} />
        </mesh>
        <mesh position={[0.25, 6.8, 0]}>
          <planeGeometry args={[0.5, 0.3]} />
          <meshStandardMaterial
            color={TOWER_COLORS.flag}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Ground */}
        <mesh
          position={[0, -0.05, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
        >
          <circleGeometry args={[4, 64]} />
          <meshStandardMaterial color={TOWER_COLORS.ground} roughness={1} />
        </mesh>

        {/* Bushes */}
        {[
          [-1.8, 0.2, 0.5],
          [1.5, 0.2, -1],
          [-1.2, 0.2, -1.5],
          [2, 0.2, 1],
        ].map((pos, i) => (
          <mesh key={`bush-${i}`} position={pos} castShadow>
            <sphereGeometry args={[0.35, 8, 8]} />
            <meshStandardMaterial color={TOWER_COLORS.bushes} roughness={0.9} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function TowerSection() {
  return (
    <section id="tower" className="tower-section">
      <div className="tower-background"></div>

      <div className="tower-content">
        <span className="tower-badge">
          <FontAwesomeIcon icon={faLandmark} /> Monument
        </span>
        <h2>Tower of Can Valls</h2>
        <p className="tower-description">
          Located in the beautiful Parc dels Germans Gabrielistes, this
          16th-century watchtower once guarded the coast against pirate raids.
          It remains a symbol of our village's defensive heritage.
        </p>
        <ul className="tower-instructions">
          <li>
            <FontAwesomeIcon icon={faArrowsAlt} /> Rotate
          </li>
          <li>
            <FontAwesomeIcon icon={faSearchPlus} /> Zoom
          </li>
        </ul>
      </div>

      <div className="tower-comparison">
        <div className="tower-photo">
          <img src={towerImage} alt="Tower of Can Valls" />
          <span className="tower-label">
            <FontAwesomeIcon icon={faCamera} /> Real Tower
          </span>
        </div>

        <div
          className="canvas-wrapper"
          role="img"
          aria-label="3D interactive model of the Tower of Can Valls"
        >
          <Canvas
            shadows
            camera={{ position: [12, 10, 12], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
            style={{ background: "transparent" }}
          >
            {/* Lights */}
            <ambientLight intensity={0.6} />
            <directionalLight
              position={[10, 15, 5]}
              intensity={1.2}
              castShadow
              shadow-mapSize={[2048, 2048]}
            />
            <directionalLight
              position={[-5, 8, -8]}
              intensity={0.5}
              color={TOWER_COLORS.skyLight}
            />
            <pointLight
              position={[0, 8, 0]}
              intensity={0.4}
              color={TOWER_COLORS.pointLight}
            />

            <Tower />

            <OrbitControls
              enablePan={false}
              minDistance={7}
              maxDistance={22}
              maxPolarAngle={Math.PI / 2.1}
              autoRotate
              autoRotateSpeed={1.5}
              target={[0, 3.5, 0]}
            />
          </Canvas>
          <span className="tower-label">
            <FontAwesomeIcon icon={faCube} /> 3D Model
          </span>
        </div>
      </div>
    </section>
  );
}

export default TowerSection;
