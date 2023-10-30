import axios from "axios";

export const getAllBrands = async () => {
  try {
    const response = await axios({
      method: "get",
      url: "http://localhost:3001/brands",
    });
    const result = response.data; //converts to json
    const ans = result.map((item) => {
      return item.brand_name;
    });
    return ans;
  } catch (err) {
    console.error(err);
  }
};
