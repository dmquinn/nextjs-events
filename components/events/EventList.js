import React from "react";
import Event from "./Event";

const EventList = (props) => {
  const { items } = props;
  console.log("items", items);

  return (
    <div className="container-lg">
      <div className="row">
        {items.map((event) => (
          <Event
            id={event.id}
            title={event.title}
            key={event.id}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        ))}
      </div>
    </div>
  );
};

export default EventList;
