import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Modal from "react-modal";
import axios from "axios";
import arrowLeft from "../../assets/icons/Back Button.svg";
import arrowRight from "../../assets/icons/Forward Button.svg";
import contactIcon from "../../assets/icons/Contact Icon.svg";

const API_URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_PORT;

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
    height: "60vh",
    padding: "0",
  },
};

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [friends, setFriends] = useState(null);
  const [page, setPage] = useState();

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const getFriends = async () => {
    const response = await axios.get(`${API_URL}${PORT}/users`);
    setFriends(response.data);
  };

  useEffect(() => {
    getFriends();
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
          <div className="modal__select-box">
            <div className="modal__select-box">
              <img alt="contact icon" src={contactIcon} />
              <select onChange={handleChange} className="modal__select">
                {friends &&
                  friends.map((friend) => {
                    return (
                      <option
                        key={friend.id}
                        className="modal__option"
                        value={friend.name}
                      >
                        {friend.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <Link to="/name">
              <img
                className="modal__arrow"
                alt="arrow forward"
                src={arrowRight}
              />
            </Link>
          </div>
        </section>
      </Modal>
      <button onClick={openModal}>Click</button>
    </>
  );
};

export default Home;
