import {Link} from "react-router-dom"
import "../NavBar/NavBar-style.css"

 const NavBar =() => {
    return(
    <>
    <nav className="NavBar-style">
            <div >
                <Link to="/book"><button>Home</button></Link>
                <Link to="/registrationForm"><button >Fill the form </button></Link>
                {/* <Link to="/donorData"><button>Donor data</button></Link> */}
            </div>
    </nav>
    </>
    )
}
export default NavBar