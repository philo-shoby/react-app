import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <img src= {LOGO_URL}/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;