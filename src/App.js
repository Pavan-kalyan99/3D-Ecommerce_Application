//import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
// import Sample from './components/Sample';
// import Api from './components/Api';
// import React,{Suspense} from 'react'
// import Three from './components/Three';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import Info from './components/Info';

// import {Iphone} from './components/Iphone'
function App() {



  return (
<>


<Home/>
{/* <Info/>
   
     <div className="container text-center">


     <div className='row'>
      <div className='col'>
      <Canvas className='canvas m-1'>
      <OrbitControls enableZoom={false}/>
      <ambientLight intensity={0.5}/>
      <directionalLight position={[-2,5,2]} intensity={1}/>

<Suspense fallback={null}>

    <Three  />
</Suspense>

     </Canvas>

      </div>
     <div className="col">
     <h1>Iphone</h1>
     <Canvas className='canvas m-1'>
      <OrbitControls enableZoom={false}/>
      <ambientLight intensity={0.5}/>
      <directionalLight position={[-2,5,2]} intensity={1}/>

<Suspense fallback={null}>

    <Iphone />
</Suspense>

     </Canvas>
    </div>

     
   
     </div >
     </div> */}
     </>
    
  );
}

export default App;
