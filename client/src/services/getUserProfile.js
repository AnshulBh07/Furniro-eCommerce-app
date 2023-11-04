import axios from "axios";

export const getUserProfile = async (email) => {
  try {
    const response = await axios({
      method: "get",
      url: `https://furniro-e-commerce-app-backend.vercel.app/getUser?mail=${email}`,
    });
    const result = response.data;
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
