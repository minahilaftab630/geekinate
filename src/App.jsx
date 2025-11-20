import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbarsec from './Pages/Navbarsec'
import Banner from './Pages/Banner'
import Softwares from './Pages/Softwares'
import Quality from './Pages/Quality'
import Geeks from './Pages/Geeks'
import Tech from './Pages/Tech'
import Design from './Pages/Design'
import Develop from './Pages/Develop'
import Digital from './Pages/Digital'
import Black from './Pages/Black'
import Form from './Pages/Form'
import Last from './Pages/Last'
import { Routes,Route } from 'react-router';





const App = () => {

  useEffect(()=> {
    AOS.init({
      duration:1000,//Animation duration
      once: true, // Whether animation should happen only once
      easing:'ease-in-out'//Easing function
    });
  },[]);

  return (
    <div>
  <Navbarsec/>
   <Routes>
    <Route path='/' element={
      <>
       <Banner/>
         <Softwares/>
  <Quality/>
  <Geeks/>
  <Tech/>

  <Develop/>
  <Digital/>
  <Black/>
  <Form/>
  <Last/>
  </>

    }/>



    <Route path='/design' element={<Design/>}/>

 

   </Routes>
  
  
  
    </div>
  )
}

export default App