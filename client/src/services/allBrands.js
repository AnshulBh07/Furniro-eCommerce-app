import axios from "axios";

export const getAllBrands = async () => {
  try {
    const response = await axios({
      method: "get",
      url: "https://furniro-e-commerce-app-backend.vercel.app/api/brands",
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
