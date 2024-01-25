import React, { useState, useEffect } from "react";
import "./Home.scss";
import Modal from "react-modal";
import axios from "axios";
import arrowLeft from "../../assets/icons/arrow-left.png";

Modal.setAppElement("#root");
Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,0.7)";
const customModalStyle = {
  content: {
    bottom: "auto",
    left: "50%",
    right: "auto",
    top: "100%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    height: "45vh",
    padding: "0",
  },
};

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [friends, setFriends] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const getFriends = async () => {
    const response = await axios.get(
      `Jack you will tell me in the morning pls`
    );
  };

  useEffect(() => {
    // getFriends();
  }, []);

  return (
    <>
      <Modal
        style={customModalStyle}
        closeModal={closeModal}
        isOpen={modalIsOpen}
        friends={friends}
      >
        <section className="modal">
          <div className="modal__inputs">
            <img
              onClick={closeModal}
              className="modal__arrow"
              alt="arrow back"
              src={arrowLeft}
            />
            <input
              className="modal__input"
              type="text"
              placeholder="     Search Contacts"
            />
          </div>
          <div className="modal__filters">
            <div className="modal__filter">All</div>
            <div className="modal__filter">Recent</div>
            <div className="modal__filter">Previously Gifted</div>
          </div>
        </section>
        <section className="modal__contacts">
          <h2 className="modal__text">Contacts</h2>
          <select>
            {friends &&
              friends.map((friend) => {
                return (
                  <option value={friend.name} key={friend.name}>
                    {friend.name}
                  </option>
                );
              })}
          </select>
        </section>
        {/* <button onClick={closeModal}>Close</button> */}
      </Modal>
      <button onClick={openModal}>Click</button>
    </>
  );
};

export default Home;
