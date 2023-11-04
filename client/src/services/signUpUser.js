import axios from "axios";

export const createNewUser = async (info) => {
  try {
    const response = await axios({
      method: "post",
      url: "https://furniro-e-commerce-app-backend.vercel.app/new_user",
      data: info,
    });
    const result = response.data;
    return result;
  } catch (err) {
    console.error(err);
  }
};
