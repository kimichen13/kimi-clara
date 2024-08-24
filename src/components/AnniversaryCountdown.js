import React, { useEffect } from "react";
import useAnniversaryStore from "../stores/AnniversaryStore";

const AnniversaryCountdown = ({ title, name, date }) => {
    const useStore = useAnniversaryStore(name);
    const timeLeft = useStore((state) => state.timeLeft);
    const totalDays = useStore((state) => state.totalDays);
    const setTimeLeft = useStore((state) => state.setTimeLeft);
    const setTotalDays = useStore((state) => state.setTotalDays);

    useEffect(() => {
        const calculateTimeLeft = () => {
            let targetDate = new Date(date);
            let now = new Date();

            const totalDays = Math.abs(
                Math.floor((+now - +targetDate) / (1000 * 60 * 60 * 24)),
            );

            while (now >= targetDate) {
                targetDate.setFullYear(targetDate.getFullYear() + 1);
            }

            const difference = +targetDate - +now;

            let timeLeft = {};

            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }

            return { timeLeft, totalDays };
        };

        let { timeLeft, totalDays } = calculateTimeLeft();
        setTimeLeft(timeLeft);
        setTotalDays(totalDays);
        const timerId = setInterval(() => {
            let { timeLeft, totalDays } = calculateTimeLeft();
            setTimeLeft(timeLeft);
            setTotalDays(totalDays);
        }, 1000);

        return () => clearInterval(timerId);
    }, [date, setTimeLeft, setTotalDays]);

    return (
        <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="mb-4">
                <p>Time until next anniversary:</p>
                <p className="text-lg font-bold">
                    {timeLeft.days} days, {timeLeft.hours} hours,{" "}
                    {timeLeft.minutes} minutes, {timeLeft.seconds} seconds
                </p>
            </div>
            <div>
                <p>Total days from now to target date:</p>
                <p className="text-lg font-bold">{totalDays} days</p>
            </div>
        </div>
    );
};

export default AnniversaryCountdown;
