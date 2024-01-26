import "./WishList.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import backArrow from "../../assets/icons/Back Button.svg";
import search from "../../assets/icons/search.png";
const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_PORT;
const WishList = () => {
  const params = useParams();
  const [gifts, setGifts] = useState(null);
  const getGifts = async () => {
    const response = await axios.get(`${API_URL}${PORT}/gifts`);
    setGifts(response.data);
  };
  useEffect(() => {
    getGifts();
  }, []);
  console.log(gifts);
  return (
    <main className="main">
      <div className="wishlist-title">
        <Link to="/">
          <img src={backArrow} alt="back arrow" className="icon" />
        </Link>
        <h3>{params.pageName} Wish List</h3>
        <img src={search} alt="Magnifying glass" className="icon" />
      </div>
      <div className="gift-cards">
        <div className="gift-card">
          {gifts &&
            gifts.map((gift) => {
              return (
                <Link to="/">
                  <div className="card" key={gift.id}>
                    <img
                      className="gift-image"
                      src={gift.image}
                      alt="Gift item"
                    />
                    <h4>{gift.gift}</h4>
                    <h4>{gift.price}</h4>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </main>
  );
};
export default WishList;
