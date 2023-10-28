import axios from "axios";

export const getAllCategories = async () => {
  try {
    const response = await axios.get("http://localhost:3001/categories");
    const result = response.data;

    const ans = result.map((item) => {
      return item.category;
    });

    return ans;
  } catch (err) {
    console.error(err.message);
  }
};
