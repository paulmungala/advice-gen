import { CircularButton } from "./CircularButton";

interface TextProps {
    id: number;
    adviceText: string;
    handleAdvice(): void;
}

export const AdviceCard = ({ adviceText, id, handleAdvice }: TextProps) => {
    return (
        <div className="relative w-[380px] md:w-[450px] md:h-[280px] bg-[#323a49] mt-20 px-8 pt-8 pb-16  rounded-xl flex flex-col justify-center items-center shadow shadow-emerald-500">
            <p className="text-md md:text-lg uppercase font-medium  text-emerald-400 absolute top-8 mx-auto ">
                Advice
                {"  "}
                <span className=" font-bold  ml-2 ">#{id}</span>
            </p>
            <div className="text-lg md:text-2xl font-manrope font-semibold text-gray-300 leading-8 text-center my-8">
                &quot;{adviceText}&quot;
            </div>
            <hr className="w-[380px] border-t-1  border-gray-500 absolute bottom-16 mx-auto" />
            <div className="absolute -bottom-[30px] mx-auto ">
                <CircularButton handleAdvice={handleAdvice} />
            </div>
        </div>
    );
};
