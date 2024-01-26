import "./SingleItem.scss";
import placeholder from "../../assets/icons/battery.png";
import addQty from "../../assets/icons/increase-qty.svg";
import lessQty from "../../assets/icons/decrease-qty.svg";

const SingleItem = () => {
  return (
    <>
      <article className="single-gift_wrap">
        <div className="single-gift">
          <img className="single-gift__image" src={placeholder}></img>
          <h2 className="single-gift__name">Headphones</h2>
          <h3 className="single-gift__price">£250.00</h3>
          <h4 className="single-gift__description">
            Intelligent and intuitive, Sony’s WH-1000XM4 over-ear wireless
            headphones make it just you and the music. Further improvements to
            the brand’s renowned QN1 noise cancelling processor bring you closer
            to your listening with no distractions. Next gen Adaptive Sound
            Control optimises the audio according to your activity and
            surroundings, automatically recognising your frequent locations via
            GPS. The powerful combination of High Resolution Audio, Bluetooth
            with LDAC, and DSEE Extreme upscaling tech bring you a pure sound,
            closer to how the artist intended. You can keep listening in
            noise-cancelled comfort, day and night, with 30 hour battery life.
            And stay in touch and in control with intelligent features like
            gesture control, as well as hands-free calling and interaction with
            your phone’s voice assistant.
          </h4>

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
