import React, {useState,useEffect} from "react";
import './Nav.css'

function Nav(){
    
    const [show, handleShow] = useState (false);
    useEffect(()=> {
        const scrollListener = event => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        };
        window.addEventListener("scroll", scrollListener);
        return ()=> { window.removeEventListener("scroll", scrollListener)};
    },[])
    
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <span className="nav_logo">StreamHub</span>
            <div className="nav_avatar" />
        </div>
             
    )
}
export default Nav;