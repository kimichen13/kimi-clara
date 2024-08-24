import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import FlightHistory from '../components/FlightHistory';

const FlightsPage = ({ data }) => {
    const flights = data.allFlightHistoryJson.nodes;

    return (
        <Layout>
            <FlightHistory flights={flights} />
        </Layout>
    );
};

export const query = graphql`
  query {
    allFlightHistoryJson {
      nodes {
        date
        airline
        flightNumber
        departureAirport
        departureTime
        arrivalAirport
        arrivalTime
        distance
        ticketNumber
      }
    }
  }
`;

export default FlightsPage;