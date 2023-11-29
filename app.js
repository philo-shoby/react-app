import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
    return (
        <div className="header">
            <img src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg" />
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

const RestaurantComponent = () => {
    return (
        <div className="resto-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5LStl-2beQjVnrwSyEagfP0bIsG3e9IwS6Zr3ieAcg&s" />
            <h2>Theobroma</h2>
            <p>Desserts, Brownies, Cakes!</p>
            <p>8.9 Stars</p>  
        </div>
    )
}
const BodyComponent = () => {
    return (
        <div className="body-container">
            <div className="search">
                <h4>Search</h4>
            </div>
            <RestaurantComponent />
            <RestaurantComponent />
            <RestaurantComponent />
            <RestaurantComponent />
            <RestaurantComponent />
            <RestaurantComponent />
            <RestaurantComponent />
            <RestaurantComponent />
            <RestaurantComponent />
            <RestaurantComponent />
        </div>
    )
}
const FooterComponent = () => {
    return (
        <div className="footer">
            <p>CopyRights</p>
            <div>
                <p>Address: Bangalore, Karnataka</p>
            </div>
        </div>
    )
}
const AppComponent = () => {
    return (
        <div>
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);