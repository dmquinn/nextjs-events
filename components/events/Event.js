import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const Event = (props) => {
  const { title, image, date, location, id } = props;
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const expLink = `/events/${id}`;
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 p-lg-2 text-center">
      <a href={expLink} className="">
        <img src={image} alt="" />
        <div>
          <div>
            <h2>{title}</h2>
          </div>
          <div>
            <time>{readableDate}</time>
          </div>
          <div>
            <address>
              <FontAwesomeIcon
                icon={faLocationArrow}
                className="icon text-red-dark"
              />{" "}
              {formattedAddress}
            </address>
          </div>
        </div>{" "}
      </a>
    </div>
  );
};

export default Event;
