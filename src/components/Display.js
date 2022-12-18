import React from "react";
import "./display.css";
import { FaPlay, FaCheckCircle } from "react-icons/fa";
import white from '../Assets/white.png'
import img1 from '../Assets/img1.png'
import Shape from '../Assets/Shape.png'

const Display = () => {
  return (
    <div className="di-container">
      <div className="di-left">
        <div className="di-title">
          <h1>Managing freelance payments has never been easier</h1>
        </div>
        <div>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing Not
            thoughts all exercise blessing.
          </p>
        </div>
        <div className="di-le-btn">
          <div className="start-btn">
            Get Started
          </div>
          <div className="icon-btn-play">
            <FaPlay className="iconplay" />
          </div>
          <p className="p1">See how it works</p>
        </div>
        <div className="check-btn">
          <p>
            <FaCheckCircle /> Free Register
          </p>
          <p className="facheck">
            <FaCheckCircle /> Great service
          </p>
        </div>
      </div>
      <div className="di-right">
        <div className="di-con">
          <img className="shape" alt="" src={Shape} />
        </div>
        <img className="wh-credit" alt="" src={white}  />
        <img className="wh-img" alt=" " src={img1} />
      </div>
    </div>
  );
};

export default Display;
