import axios from "axios";

export const getProductDetails = async (sku) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/product_details/${sku}`
    );
    const result = response.data;
    return result;
  } catch (error) {
    console.error(error.message);
  }
};
