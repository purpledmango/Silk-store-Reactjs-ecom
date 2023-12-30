import api from "./api";

export const latestFashion = async () => {
  const sliderData = api.get("/products?limit=10&select=womens-jewellery");
};
