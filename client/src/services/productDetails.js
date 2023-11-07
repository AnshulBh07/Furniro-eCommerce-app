import axios from "axios";

export const getProductDetails = async (sku) => {
  try {
    const response = await axios.get(`/api/product_details/${sku}`);
    const result = response.data;
    return result;
  } catch (error) {
    console.error(error.message);
  }
};
