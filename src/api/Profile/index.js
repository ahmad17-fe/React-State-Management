import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getProfil = async () => {
  let URL = `${BASE_URL}/profil`;

  try {
    const res = await axios.get(URL);

    return res.data;
  } catch (error) {
    console.log("Fetching Error");
  }
};
