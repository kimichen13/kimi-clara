import React from 'react';
import { motion } from 'framer-motion';

const FlightTimeline = ({ flights }) => {
    return (
        <div className="container mx-auto py-8">
            <h2 className="text-4xl font-bold mb-12 text-center">Flight History</h2>
            <div className="relative">
                <div className="border-r-2 border-indigo-600 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
                {flights.map((flight, index) => (
                    <div
                        key={index}
                        className="mb-8 flex justify-between items-center w-full"
                    >
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-indigo-600 rounded-full h-8 w-8 border-4 border-white">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                className="h-3 w-3 bg-white rounded-full"
                            ></motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className={`order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 ${
                                index % 2 === 0 ? 'bg-indigo-100' : 'bg-indigo-200'
                            }`}
                        >
                            <h3 className="text-xl font-bold mb-2">{flight.date}</h3>
                            <p>
                                <span className="font-bold">Airline:</span> {flight.airline}
                            </p>
                            <p>
                                <span className="font-bold">Flight Number:</span>{' '}
                                {flight.flightNumber}
                            </p>
                            <p>
                                <span className="font-bold">Departure Airport:</span>{' '}
                                {flight.departureAirport || 'N/A'}
                            </p>
                            <p>
                                <span className="font-bold">Departure Time:</span>{' '}
                                {flight.departureTime}
                            </p>
                            <p>
                                <span className="font-bold">Arrival Airport:</span>{' '}
                                {flight.arrivalAirport || 'N/A'}
                            </p>
                            <p>
                                <span className="font-bold">Arrival Time:</span>{' '}
                                {flight.arrivalTime}
                            </p>
                            <p>
                                <span className="font-bold">Distance:</span> {flight.distance}{' '}
                                km
                            </p>
                            <p>
                                <span className="font-bold">Ticket Number:</span>{' '}
                                {flight.ticketNumber}
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlightTimeline;