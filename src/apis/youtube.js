import axios from "axios";

const KEY = "AIzaSyCDKXF3u5T2-HX-iEti_B1JAVvnjUsoUkw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
