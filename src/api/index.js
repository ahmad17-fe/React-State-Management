import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getAllArticle = async () => {
  let URL = `${BASE_URL}/posts`;

  try {
    const res = await axios.get(URL);

    return res.data;
  } catch (error) {
    console.log("Fetching Error");
  }
};
