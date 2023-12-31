import axios from "axios";

export const addNewAddress = async (input_data) => {
  try {
    const response = await axios({
      method: "put",
      url: "https://furniro-e-commerce-app-backend.vercel.app/api/add_address",
      data: input_data,
    });

    const result = response.data;
    return result;
  } catch (err) {
    console.error(err);
  }
};
