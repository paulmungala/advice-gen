import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { AdviceCard } from "../components/AdviceCard";

const API = "https://api.adviceslip.com/advice";

const Home: NextPage = () => {
    // states
    const [adviceText, setAdviceText] = useState<string>("loading..");
    const [adviceId, setAdviceId] = useState<number>(0);

    // function
    const fetchAdvice = async () => {
        const res = await fetch(API);
        const data = await res.json();

        setAdviceId(data.slip.id);
        setAdviceText(data.slip.advice);
    };
    // onload
    useEffect(() => {
        fetchAdvice();
    });

    // onclick
    const handleAdvice = () => {
        fetchAdvice();
    };

    return (
        <div className="flex min-h-screen bg-gray-800 flex-col items-center py-2">
            <h1 className="text-emerald-200 font-bold text-2xl md:text-4xl font-manrope mt-4 rounded-xl hover:rounded-xl hover:shadow-lg hover:shadow-emerald-600 hover:bg-emerald-500 hover:text-emerald-100 px-4 py-2 transition duration-300 ease-in ">
                Advice App
            </h1>
            {/* card */}
            <AdviceCard
                id={adviceId}
                adviceText={adviceText}
                handleAdvice={handleAdvice}
            />
        </div>
    );
};

export default Home;
