import React from "react";
import wifi from "../../assets/icons/wifi.png";
import battery from "../../assets/icons/battery.png";
import "./Header.scss";

const time = new Date();
const options = {
  timeZone: "London",
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

const hours = time.getHours("en-GB", options);
const minutes = time.getMinutes("en-GB", options);

const Header = () => {
  return (
    <div className="header">
      <div className="header__corner">
        {hours}:{minutes}
      </div>
      <div className="header__corner">
        {/* <img className="header__icons" alt="coverage" src={coverage} /> */}
        <img className="header__icons" alt="wifi" src={wifi} />
        <img className="header__icons" alt="battery" src={battery} />
      </div>
    </div>
  );
};

export default Header;
