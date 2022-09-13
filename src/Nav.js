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
            <img className="nav_logo"
                 src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
                 alt="Netflix Logo"
                 />
            <img className="nav_avatar"
                 src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                 alt="Netflix Logo"
            />     
        </div>
             
    )
}
export default Nav;