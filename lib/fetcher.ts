import axios from "axios";

const API = "https://api.adviceslip.com/advice";

export const fetchAdvice = async () => {
    const response = await axios.get(API);
    return response.data;
};
