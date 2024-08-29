
import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import PriceOptions from './Components/PriceOptions';

function App() {
  const [open, setOpen] =  useState(false)
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About Us" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile", name: "User Profile" }
  ];
  
  return (
    <>
    <div className='p-2'>
    <div className='md:hidden text-2xl' onClick={()=>setOpen(!open)}>
      {
        open? <AkarIconsCross></AkarIconsCross> : <IcBaselineMenu></IcBaselineMenu> 
      }
        
    </div>
      <div>
        <ul className={`md:flex md:p-2 gap-5 duration-1000 text-2xl absolute md:static ${open? 'top-8' : '-top-48'}`}>
        {
          routes.map((route,idx) => <Navbar key={idx} route={route}></Navbar>)
        }
        </ul>
        
      </div>
    </div>
    <PriceOptions></PriceOptions>
    </>
  )
}
// Menu bar 
export function IcBaselineMenu(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path></svg>
  )
}
// cross 

export function AkarIconsCross(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M20 20L4 4m16 0L4 20"></path></svg>
  )
}
export default App
