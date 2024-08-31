import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import FlightTimeline from "../components/FlightTimeline";

const FlightsPage = ({ data }) => {
    const flights = data.allFlightHistoryJson.nodes;

    return (
        <Layout>
            <FlightTimeline flights={flights} />
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
            }
        }
    }
`;

export default FlightsPage;
