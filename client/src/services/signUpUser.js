import axios from "axios";

export const createNewUser = async (info) => {
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:3001/new_user",
      data: info,
    });
    const result = response.data;
    return result;
  } catch (err) {
    console.error(err);
  }
};
