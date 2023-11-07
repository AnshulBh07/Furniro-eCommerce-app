import axios from "axios";

export const getUserProfile = async (email) => {
  try {
    const response = await axios({
      method: "get",
      url: `/api/getUser?mail=${email}`,
    });
    const result = response.data;
    return result[0];
  } catch (err) {
    console.error(err);
  }
};
