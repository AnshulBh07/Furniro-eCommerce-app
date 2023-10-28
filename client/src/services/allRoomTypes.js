import axios from "axios";

export const getAllRoomTypes = async () => {
  try {
    const response = await axios.get("http://localhost:3001/room_types");
    const result = response.data;

    const ans = result.map((item) => {
      return item.room_type.toLowerCase();
    });

    return [...new Set(ans)];
  } catch (err) {
    console.error(err.message);
  }
};
