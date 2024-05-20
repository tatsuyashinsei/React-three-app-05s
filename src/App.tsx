import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import { useControls } from 'leva';

function App() {
  const {scale, positionX, positionY, positionZ, color, wireframe, enableZoom, gridHelper } = useControls('Box', {
    scale: {
      value: 0.5,
      min: 0.1,
      max: 3,
      step: 0.1,
    },
    positionX: {
      value: 0,
      min: -3,
      max: 3,
      step: 0.1,
    },
    positionY: {
      value: 0,
      min: -3,
      max: 3,
      step: 0.1,
    },
    positionZ: {
      value: 0,
      min: -3,
      max: 3,
      step: 0.1,
    },
    color: '#a0d8ef',
    wireframe: false,
    enableZoom: true,
    gridHelper: false,
  });

  return (
    <div className="w-full h-screen">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight color="skyblue" position={[0, 0, 5]} />
        {/* <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="skyblue" />
        </mesh> */}
        <Box args={[2, 2, 2]} scale={scale} position={[positionX, positionY, positionZ]}>
          <meshStandardMaterial color={color} wireframe={wireframe}/>
        </Box>
        {/* <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        /> */}
        <OrbitControls enableZoom={enableZoom}/>
        {gridHelper && <gridHelper args={[10, 20, "red", "white"]} />}
      </Canvas>
    </div>
  );
}

export default App;
