import axios from "axios";

// const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    // "X-RapidAPI-Key": process.env.REACT_APP_RAPPID_API_KEY,
    // "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}&key=${process.env.REACT_APP_YT_API_KEY}`, options);
  return data;
};
