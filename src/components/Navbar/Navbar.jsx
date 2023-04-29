import "./Navbar.css";
import Logo from "../../assets/safe spot.png";

import { BsFillPinMapFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img src={Logo} alt="safe spot" />
                </div>

                <div className="right">
                    <div className="map-container">
                        <BsFillPinMapFill size={'2rem'} color={'white'} />
                        <h3>Map</h3>
                    </div>
                    <div className="search-container">
                        <h3>Search by State</h3>
                    </div>
                    <div className="signIn-container">
                        <h3>Sign In</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar;