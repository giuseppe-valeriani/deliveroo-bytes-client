import "./BuyingFriend.scss";

const BuyingFriend = ({ openModal }) => {
  return (
    <section className="buying">
      <article className="buying__button-area">
        <p>Buying for a friend?</p>
        <button onClick={openModal} className="buying__button">
          Find their gift list
        </button>
      </article>
    </section>
  );
};

export default BuyingFriend;
