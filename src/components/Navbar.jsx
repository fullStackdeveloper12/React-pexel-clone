import React from 'react'
import './navbar.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = ({setSearch}) => {
    const navigate=useNavigate();
    const location=useLocation();
  return(
    <>
      <ul>
      <li><a href="#" onClick={()=>{setSearch("travel");navigate("/")}}>Travel</a></li>
        <li><a href="#" onClick={()=>{setSearch("space");navigate("/")}}>Space</a></li>
        <li><a href="#" onClick={()=>{setSearch("asia");navigate("/")}}>Asia</a></li>
        <li><a href="#" onClick={()=>{setSearch("city");navigate("/")}}>City</a></li>
        <li><a href="#" onClick={()=>{setSearch("car");navigate("/")}}>Car</a></li>
        <li><a href="#" onClick={()=>{setSearch("fashion");navigate("/")}}>Fashion</a></li>
        <li><a href="#" onClick={()=>{setSearch("animals");navigate("/")}}>Animals</a></li>
        <li><a href="#" onClick={()=>{setSearch("technology");navigate("/")}}>Technology</a></li>
        <li><a href="#" onClick={()=>{setSearch("business");navigate("/")}}>Business</a></li>
        <li><a href="#" onClick={()=>{setSearch("nature");navigate("/")}}>Nature</a></li>
        <li><a href="#" onClick={()=>{setSearch("dubai");navigate("/")}}>Dubai</a></li>

        {location.pathname=="/saved"?( <li><a href="#" id='cta-btn' onClick={()=>navigate("/")}>Home</a></li>):(<li><a href="#" id='cta-btn' onClick={()=>navigate("/saved")}>Saved</a></li>)}
        
       
      </ul>
      {location.pathname ==="/" &&
      <>
      <div className="search-container">
      <form>
        <input type="search" placeholder="Search.." onChange={(e)=>setSearch(e.target.value)}/>
      </form>
      </div>
      </>
      }
      
    </>
  )
}

export default Navbar
