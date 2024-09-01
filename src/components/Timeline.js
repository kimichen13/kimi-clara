import React from "react";
import FlightComponent from "./FlightComponent";

const Timeline = ({ flights }) => {

    // Calculate the date-to-flight map
    const dateToFlightMap = flights.reduce((map, flight) => {
        if (!map[flight.date]) {
            map[flight.date] = [];
        }
        map[flight.date].push(flight);
        return map;
    }, {});

    // Sort the dates in ascending order
    const sortedDates = Object.keys(dateToFlightMap).sort(
        (a, b) => new Date(a) - new Date(b)
    );

    return (
        <div className="container mx-auto py-8">
            <div className="relative">
                <div
                    className="border-r-4 border-home absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
                {sortedDates.map((date, dateIndex) => {
                    const rows = Math.ceil(dateToFlightMap[date].length / 2);
                    return Array.from({length: rows}, (_, rowIndex) => (
                        <div key={`${date}-${rowIndex}`} className="mb-8 flex justify-between items-center w-full">
                            <div className="w-3/4 pl-8 flex justify-center">
                                {dateToFlightMap[date][rowIndex * 2] && (
                                    <FlightComponent
                                        flight={{
                                            ...dateToFlightMap[date][rowIndex * 2],
                                            direction: "left",
                                        }}
                                    />
                                )}
                            </div>
                            {rowIndex === 0 && (
                                <div
                                    className="absolute left-1/2 transform -translate-x-1/2"
                                    style={{top: `${dateIndex * 200}px`}}
                                >
                                    <div className="bg-home text-white rounded-full px-4 py-2 font-bold text-lg">
                                        {date}
                                    </div>
                                </div>
                            )}
                            <div className="w-3/4 pl-8 flex justify-center">
                                {dateToFlightMap[date][rowIndex * 2 + 1] && (
                                    <FlightComponent
                                        flight={{
                                            ...dateToFlightMap[date][rowIndex * 2 + 1],
                                            direction: "right",
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    ));
                })}
            </div>
            <div className="absolute inset-0 bg-transparent z-0">
                {/* Add your map component here */}
            </div>
        </div>
    );
};

export default Timeline;
