import axios from "axios";

export const getCardData = async () => {
  try {
    const response = await axios.get(`http://localhost:3001/products`);
    const result = response.data;
    console.log(result);

    const ans = result.map((item) => {
      //for each item we are destructuring
      const {
        sku,
        category,
        title,
        images,
        price,
        discount_value,
        overall_rating,
        tags,
        updated_at,
        new: New,
        brand_name,
        room_type,
      } = item;

      // convert timestamptz format to integer data format for easy comparison when sorting
      const my_arr = updated_at.split("T");
      const x = my_arr[0].split("-");
      var y = "";
      for (var i = 0; i < x.length; i++) {
        y += x[i];
      }
      const date = Number(y);

      // get discounted price too
      const discounted_price = Math.round(
        price - (discount_value / 100) * price
      );

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
        date,
        brand_name,
        discounted_price,
      };
    });
    return ans;
  } catch (error) {
    console.error(error.message);
  }
};
