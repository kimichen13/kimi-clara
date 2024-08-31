import React from 'react';
import FlightComponent from './FlightComponent';

const FlightTimeline = ({ flights }) => {
    return (
        <div className="container mx-auto py-8">
            <h2 className="text-4xl font-bold mb-12 text-center">Flight History</h2>
            <div className="relative">
                <div className="border-r-4 border-indigo-600 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
                {flights.map((flight, index) => (
                    <div key={index} className="mb-8 flex justify-between items-center w-8/12">
                        {index % 2 === 0 ? (
                            <>
                                <FlightComponent flight={{ ...flight, direction: 'left' }} />
                                <div className="order-1 w-1/2"></div>
                            </>
                        ) : (
                            <>
                                <div className="order-1 w-1/2"></div>
                                <FlightComponent flight={{ ...flight, direction: 'right' }} />
                            </>
                        )}
                    </div>
                ))}
                {flights.map((flight, index) => (
                    <div
                        key={index}
                        className="absolute left-1/2 transform -translate-x-1/2"
                        style={{ top: `${index * 200}px` }}
                    >
                        <div className="bg-indigo-600 text-white rounded-full px-4 py-2 font-bold text-lg">
                            {flight.date}
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 bg-transparent z-0">
                {/* Add your map component here */}
            </div>
        </div>
    );
};

export default FlightTimeline;