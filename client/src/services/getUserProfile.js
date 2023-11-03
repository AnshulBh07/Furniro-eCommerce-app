import axios from "axios";

export const getUserProfile = async (email) => {
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:3001/getUser?mail=${email}`,
    });
    const result = response.data;
    return result;
  } catch (err) {
    console.error(err);
  }
};
