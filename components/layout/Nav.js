import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  return (
    <div className="row bg-black o-96">
      <div className="col-md-5">
        <div className="row">
          <FontAwesomeIcon icon={faSearch} className="m-2 text-white search" />{" "}
          <input className="h-1 mt-1 text-white pl-2" placeholder="Search" />
        </div>
      </div>
      <div className="col-md-5">
        <div className="row j-end">
          <h4 className="text-white p-2 pr-5">Login</h4>
          <h4 className="text-white p-2 pr-10">Register</h4>
        </div>
      </div>
    </div>
  );
};

export default Nav;
