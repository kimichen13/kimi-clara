import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Timeline from "../components/Timeline";

const TimelinePage = ({ data }) => {
    const flights = data.allFlightHistoryJson.nodes;

    return (
        <Layout>
            <div className="bg-gray-100 min-h-screen py-12">
                <h1 className="text-3xl font-bold text-center mb-8">
                    My Love Life Timeline
                </h1>
                <Timeline flights={flights} />
            </div>
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

export const Head = () => <title>Timeline</title>;

export default TimelinePage;
