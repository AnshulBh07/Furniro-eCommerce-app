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
        category,
        room_type,
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
        category,
        room_type,
      };
    });
    return ans;
  } catch (error) {
    console.error(error.message);
  }
};
