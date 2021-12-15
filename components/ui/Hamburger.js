import React, { useState } from "react";
import MenuModal from "../modals/MenuModal";

const Hamburger = () => {
  const [clicked, setClicked] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <div
        className={clicked ? "hamburger open z-2" : "hamburger z-2"}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <MenuModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  );
};

export default Hamburger;
