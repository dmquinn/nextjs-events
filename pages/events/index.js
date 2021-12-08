import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getAllEvents } from "../api/eventsApi";
import EventList from "../../components/events/EventList";
import Search from "../../components/events/Search";
const AllEvents = (props) => {
  const router = useRouter();
  const findEventsHandler = (year, month) => {
    const path = `/events/${year}/${month}`;
    router.push(path);
  };
  return (
    <div>
      <Head>
        <title>Events</title>
      </Head>

      <Search onSearch={findEventsHandler} />
      {<EventList items={props.events} />}
    </div>
  );
};
export async function getStaticProps() {
  const allEvents = await getAllEvents();
  // console.log(featuredEvents);
  return {
    props: {
      events: allEvents,
    },
    revalidate: 1800,
  };
}

export default AllEvents;
