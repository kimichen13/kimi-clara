import React from 'react';
import { motion } from 'framer-motion';

const FlightComponent = ({ flight }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: flight.direction === 'left' ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-white rounded-lg shadow-lg p-6 mb-8 w-full md:w-1/2"
        >
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h3 className="text-xl font-bold">{flight.airline}</h3>
                    <p className="text-gray-600">{flight.flightNumber}</p>
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <p className="text-gray-600 mb-1">Departure</p>
                    <p className="font-bold">{flight.departureAirport}</p>
                    <p>{flight.departureTime}</p>
                </div>
                <div className="text-right">
                    <p className="text-gray-600 mb-1">Arrival</p>
                    <p className="font-bold">{flight.arrivalAirport}</p>
                    <p>{flight.arrivalTime}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default FlightComponent;