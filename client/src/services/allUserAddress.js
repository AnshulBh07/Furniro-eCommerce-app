import axios from "axios";

export const getUserAddress = async (user_id) => {
  try {
    const response = await axios({
      method: "get",
      url: `https://furniro-e-commerce-app-backend.vercel.app/api/user_address?user_id=${user_id}`,
    });
    const result = response.data;
    return result;
  } catch (err) {
    if (err) console.error(err);
  }
};
