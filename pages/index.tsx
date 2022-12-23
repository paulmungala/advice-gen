import type { NextPage } from "next";
import { useQuery } from "react-query";
import { AdviceCard } from "../components/AdviceCard";
import { fetchAdvice } from "../lib/fetcher";

const Home: NextPage = () => {
    const { data, isLoading, refetch } = useQuery("advice", fetchAdvice);

    if (isLoading) {
        return (
            <AdviceCard
                id={0}
                adviceText="loading"
                handleAdvice={() => {
                    console.log("loading...");
                }}
            />
        );
    }
    return (
        <div className="flex min-h-screen bg-gray-800 flex-col items-center py-2">
            <h1 className="text-emerald-200 font-bold text-2xl md:text-4xl font-manrope mt-4 rounded-xl hover:rounded-xl hover:shadow-lg hover:shadow-emerald-600 hover:bg-emerald-500 hover:text-emerald-100 px-4 py-2 transition duration-300 ease-in ">
                Advice App
            </h1>
            {/* card */}
            <AdviceCard
                id={data?.slip.id}
                adviceText={data?.slip.advice}
                handleAdvice={refetch}
            />
        </div>
    );
};

export default Home;
