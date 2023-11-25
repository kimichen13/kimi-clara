import React, {useEffect} from 'react';
import useAnniversaryStore from "../stores/AnniversaryStore";

const AnniversaryCountdown = ({title, name, date}) => {
    const useStore = useAnniversaryStore(name);
    const timeLeft = useStore(state => state.timeLeft);
    const totalDays = useStore(state => state.totalDays);
    const setTimeLeft = useStore(state => state.setTimeLeft);
    const setTotalDays = useStore(state => state.setTotalDays);


    useEffect(() => {

        const calculateTimeLeft = () => {
            let targetDate = new Date(date);
            let now = new Date();

            const totalDays = Math.abs(Math.floor((+now - +targetDate) / (1000 * 60 * 60 * 24)));

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

            return {timeLeft, totalDays};
        };

        let {timeLeft, totalDays} = calculateTimeLeft();
        setTimeLeft(timeLeft);
        setTotalDays(totalDays);
        const timerId = setInterval(() => {
            let {timeLeft, totalDays} = calculateTimeLeft();
            setTimeLeft(timeLeft);
            setTotalDays(totalDays);
        }, 1000);

        return () => clearInterval(timerId);
    }, [date]);

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="-mx-3 md:flex mb-6">
                <h1 className="text-2xl mb-2">{title}</h1>
            </div>
            <hr className="mb-6 border-t"/>
            <div className="-mx-3 md:flex mb-2">
                <div className="md:w-full px-3 mb-6 md:mb-0">
                    <span>Time until next anniversary:</span>
                    <h3 className="text-lg mb-2">{timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes, {timeLeft.seconds} seconds</h3>
                </div>
                <div className="md:w-full px-3">
                    <span>Total days from now to target date:</span>
                    <h3 className="text-lg mb-2">{totalDays} days</h3>
                </div>
            </div>
            <div className="md:w-full px-3">
            </div>
        </div>
    );
};

export default AnniversaryCountdown;