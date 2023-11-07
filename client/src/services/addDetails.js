import axios from "axios";

export const updateUser = async (input_data) => {
  console.log(input_data);
  try {
    const response = await axios({
      method: "patch",
      url: "/api/update_user",
      data: input_data,
    });
    const result = response.data;
    return result;
  } catch (err) {
    console.error(err);
  }
};
