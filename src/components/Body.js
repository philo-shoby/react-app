import { useState, useEffect  } from "react";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";
import { APP_DATA } from "../utils/constants";

const Body = () => {
    const [listOfRes, setListOfRes] = useState([]);

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(APP_DATA);

        const json = await data.json();

        setListOfRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    return listOfRes.length === 0 ? <Shimmer /> : (
        <div className="body-container">
            <div className="search">
                <h3>Search</h3>
                <button className="top-rated"
                 onClick={() => {
                    const filtered = listOfRes.filter(res => res.info.avgRating > 4)
                    setListOfRes(filtered);
                 }}
                >Top Rated Restaurants</button>
            </div>
            {
                listOfRes.map((restaurant) => <RestaurantCards key={restaurant.info.id} resData={restaurant} />)
            }
        </div>
    )
}

export default Body;