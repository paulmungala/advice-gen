interface Prop {
    handleAdvice(): void;
}

export const CircularButton = ({ handleAdvice }: Prop) => {
    return (
        <button
            type="button"
            onClick={handleAdvice}
            className=" bg-emerald-400 px-4 py-4 rounded-full text-green-900 hover:bg-green-200 hover:text-emerald-500  hover:shadow-xl hover:shadow-emerald-600 hover:scale-105 transition duration-300 ease-in"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
            </svg>
        </button>
    );
};
