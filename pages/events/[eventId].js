import React from "react";
import { getEventById, getAllEvents } from "../api/eventsApi";
import Head from "next/head";
import EventSummary from "../../components/eventDetail/event-summary";
import EventLogistics from "../../components/eventDetail/event-logistics";
import EventContent from "../../components/eventDetail/event-content";
import Comments from "../../components/input/comment";

const EventDetailsPage = (props) => {
  const event = props.selectedEvent;
  if (!event) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Head>
        <title>{event.title}</title>
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </>
  );
};
export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 90,
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: true,
    //blocking?
  };
}

export default EventDetailsPage;
