import axios from "axios";

export const getRelatedProducts = async (category, sku) => {
  try {
    const response = await axios.get(
      `https://furniro-e-commerce-app-backend.vercel.app/api/related_products?category=${category}&sku=${sku}`
    );
    const result = response.data; //converts to json
    //destucture to form card data to display under related products
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
  } catch (err) {
    console.error(err.message);
  }
};
