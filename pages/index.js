import React from "react";
import Head from "next/head";
import { getFeaturedEvents } from "./api/eventsApi";
import EventList from "../components/events/EventList";
import Nav from "../components/layout/Nav";

import Newsletter from "../components/input/newsletter-registration";
import Search from "../components/events/Search";

const Homepage = (props) => {
  console.log(props);
  return (
    <>
      <Head>
        <title>Busckr</title>
      </Head>
      <div className="banner h-70 mt--8 z-1"></div>
      <Nav />
      {/* <Search onSearch={findEventsHandler} /> */}
      {<EventList items={props.events} />}
      <Newsletter />
    </>
  );
};
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  // console.log(featuredEvents);
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
export default Homepage;
