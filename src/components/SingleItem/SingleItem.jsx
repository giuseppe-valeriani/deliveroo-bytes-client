import "./SingleItem.scss";
import addQty from "../../assets/icons/increase-qty.svg";
import lessQty from "../../assets/icons/decrease-qty.svg";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import deliverooLogo from "../../assets/icons/deliveroo_icon.svg";

const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_PORT;

Modal.setAppElement("#root");
Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,0.4)";

const SingleItem = () => {
  const navigate = useNavigate();
  const [gift, setGift] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { id } = useParams();

  const openModal = () => {
    setModalIsOpen(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

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
      <Modal className="modal" closeModal={closeModal} isOpen={modalIsOpen}>
        <img className="modal__logo" alt="deliveroo logo" src={deliverooLogo} />
        <div>Your gift has now been purchased</div>
        <div>Now sit back and relax</div>
        <button className="modal__button" onClick={closeModal}>
          Nice!
        </button>
      </Modal>
      <article className="single-gift_wrap">
        <div className="single-gift">
          <img
            className="single-gift__image"
            alt="product shown"
            src={gift.image}
          ></img>
          <h2 className="single-gift__name">{gift.gift}</h2>
          <h3 className="single-gift__price">{gift.price}</h3>
          <h4 className="single-gift__description">{gift.description}</h4>

          <h4 className="single-gift__store-contact">
            Questions about allergens, ingredients or products? Please contact
            the store
          </h4>
        </div>
        <div className="single-gift__qty-wrap">
          <img className="single-gift__qty-icon" alt="" src={lessQty}></img>
          <p className="single-gift__qty">1</p>
          <img className="single-gift__qty-icon" alt="" src={addQty}></img>
        </div>
        <div className="single-gift__button-wrap">
          <button onClick={openModal} className="single-gift__button">
            Buy Gift and Notify Recipient
          </button>
        </div>
      </article>
    </>
  );
};

export default SingleItem;
