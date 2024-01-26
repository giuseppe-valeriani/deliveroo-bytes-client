import "./SingleItem.scss";
import placeholder from "../../assets/icons/battery.png";
import addQty from "../../assets/icons/increase-qty.svg";
import lessQty from "../../assets/icons/decrease-qty.svg";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_PORT;

const SingleItem = () => {
  const [gift, setGift] = useState(null);

  const { id } = useParams();

  const getGift = async () => {
    const response = await axios.get(`${API_URL}${PORT}/gifts/${id}`);
    setGift(response.data);
  };
  useEffect(() => {
    getGift();
  }, []);

  if (!gift) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <article className="single-gift_wrap">
        <div className="single-gift">
          <img className="single-gift__image" src={gift.image}></img>
          <h2 className="single-gift__name">{gift.gift}</h2>
          <h3 className="single-gift__price">{gift.price}</h3>
          <h4 className="single-gift__description">{gift.description}</h4>

          <h4 className="single-gift__store-contact">
            Questions about allergens, ingredients or products? Please contact
            the store
          </h4>
        </div>
        <div className="single-gift__qty-wrap">
          <img className="single-gift__qty-icon" src={lessQty}></img>
          <p className="single-gift__qty">1</p>
          <img className="single-gift__qty-icon" src={addQty}></img>
        </div>
        <div className="single-gift__button-wrap">
          <button className="single-gift__button">
            Buy Gift and Notify Recipient
          </button>
        </div>
      </article>
    </>
  );
};

export default SingleItem;
