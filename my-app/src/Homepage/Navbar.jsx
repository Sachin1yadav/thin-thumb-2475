import "./Home.css"
import { Router, Link } from "react-router-dom";
 
import Login from "./Login"
function Navbar(){


    return(
        <div>
            
            <div className="Navbar"> 
            
<div className="navbarLogo">
    <img  src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"/> 
</div>
<div className="navbarRouter">
    <div className="navbarRouter1">
        <div>
            <p>Blog</p>
        </div>
        <div>
            <p  className="reg">Register As A Professional</p>
        </div>
        <div>
            <p>  Login</p>
            
            {/* <Link to="/Login" >Login</Link> */}
           
           
             {/* <a href={Login}>Login</a> */}
        </div>
        <div>
            <p className="sign">/SignUp</p>
        </div>
    </div>
</div>

            </div>
        </div>
    )
}
export default Navbar 