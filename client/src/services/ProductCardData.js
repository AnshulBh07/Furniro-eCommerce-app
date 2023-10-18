import axios from "axios";

export const getCardData = async () => {
  try {
    const response = await axios.get(`http://localhost:3001/products`);
    const result = response.data;

    const ans = result.map((item) => {
      //for each item we are destructuring
      const {
        sku,
        overall_rating,
        price,
        discount_value,
        new: New,
        images,
        title,
        tags,
      } = item;

      const [image, , ,] = images;
      const [tag] = tags;

      return {
        sku,
        overall_rating,
        image,
        price,
        discount_value,
        new: New,
        title,
        tag,
      };
    });
    return ans;
  } catch (error) {
    console.error(error.message);
  }
};
