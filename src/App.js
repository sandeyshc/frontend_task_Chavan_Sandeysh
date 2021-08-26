// import logos from './svgs.svg';
// import logo from './image.jpg';

import logoss from './new.jpg';
// import logoss from './AA.jpg'
import Login from './Login';
import './App.css';
import { useState,useEffect,useLayoutEffect } from 'react';




function App(){
  const [sizes,setsizes]=useState('')

  // useEffect(() => {
  //   if(window.innerWidth<=768){
  //     setsizes("col-span-2")
  //   }
  // }, [])
  useLayoutEffect(() => {
    function updateScreenSize() {
          if(window.innerWidth<=768){
      setsizes("col-span-2")

    }
    else{
      setsizes('')
    }

    }
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return(
    // <div className="md:flex">
    //   <div >Hi</div>
    //   <div><img style={{resizeMode: 'contain'}} src={logo} width="50%"/></div>
    // </div>
    // mx-16 my-10 
<div className="grid grid-flow-col grid-rows-1 grid-cols-2 gap-0 helloss col-span-2" style={{backgroundColor:'black',padding:'4% 8%', resize:"contain"}}>
  <div className={sizes} style={{backgroundColor:'#fff'}}>
    {console.log(window.innerWidth,window.innerHeight)}
  {/* <img src={logoss}/> */}
  <Login />
  {/* style={{resizeMode: 'contain'}} */}
  </div>
  <div className="hellosm">
  <img src={logoss}/>
  </div>
  {/* <div class="row-start-1 col-start-2 col-span-2">
    5
  </div> */}
</div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
