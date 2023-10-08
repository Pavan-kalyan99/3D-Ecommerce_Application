
import Layout from './../Layout/Layout';
import React,{Suspense} from 'react'

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


import {Iphone} from '../components/Iphone'
import Tstore from '../components/Tstore'
import Example from '../components/Example';
import Feedback from '../components/Feedback';

const Home = () => {
  return (
    <Layout>
       
  
    
   
     <div className="container text-center">


     <div className='row'>
     <div className="col" style={{backgroundColor:'black'}}>
     <h1 className='store-title'>Experience the future of online Shopping</h1>
     <Canvas className='canvas m-1'>
      <OrbitControls enableZoom={false}/>
      <ambientLight intensity={0.5}/>
      <directionalLight position={[-2,5,2]} intensity={1}/>

<Suspense fallback={null}>
 
    <Tstore/> 
</Suspense>

     </Canvas>
    </div>
    <div className='col'>
      <Example/>

    </div>
 
     <div className="col" id='products'>
      <div className='Products'>

     <h1 className='product-title'>Our Products</h1>
     <div className='product-info'>
     <p className='product-data'><strong>Sample product:</strong>Apple IPhone 13 Pro Max</p>
   
     </div>
     
     
      </div>
     <Canvas className='canvas m-1'>
      <OrbitControls enableZoom={false}/>
      <ambientLight intensity={0.5}/>
      <directionalLight position={[-2,5,2]} intensity={1}/>

<Suspense fallback={null}>

    <Iphone />
</Suspense>

     </Canvas>
    </div>
    <Feedback/>

     
   
     </div >
     </div>

      
    </Layout>
  )
}

export default Home
