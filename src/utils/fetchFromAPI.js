import axios from "axios";


const BASE_URL = 'https://al-quran1.p.rapidapi.com'
const options = {
  
    headers: {
        'X-RapidAPI-Key': 'aa2be3fd3cmsh3fef11c1bc0632bp1edd38jsn0060cdcb7079',
        'X-RapidAPI-Host': 'al-quran1.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}