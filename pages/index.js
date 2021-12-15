import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getFeaturedEvents } from "./api/eventsApi";
import EventList from "../components/events/EventList";
import Nav from "../components/layout/Nav";
import HeaderData from "./headerData";
import Newsletter from "../components/input/newsletter-registration";
import Search from "../components/events/Search";

const Homepage = (props) => {
  return (
    <>
      <Head>
        <title>Busckr</title>
      </Head>
      <Nav />
      {/* <Search onSearch={findEventsHandler} /> */}
      {<EventList items={props.events} />}
      <Newsletter />
    </>
  );
};
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
export default Homepage;
