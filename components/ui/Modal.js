import React from "react";
import Head from "next/head";

const Modal = ({ modalIsOpen, setModalIsOpen }) => {
  return modalIsOpen ? (
    <div
      className={
        modalIsOpen ? "z-1 modal w-100 h-100 bg-black o-95" : "z-1 modal close"
      }
    >
      <div className="container">
        <div className="row text-white-light j-around">
          <div className="col-md-5 text-end mt-10">
            <h1 className="p-1">Events</h1>
            <h2 className="o-70">Featured Events</h2>
            <h2 className="o-70">This Week</h2>
            <h2 className="o-70">Past Events</h2>
          </div>
          <div className="col-md-5 text-start mt-10">
            <h1 className="p-1">Community</h1>
            <h2 className="o-70">Join the Community</h2>
            <h2 className="o-70">Explore</h2>
            <h2 className="o-70">This</h2>
          </div>{" "}
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
};

export default Modal;
