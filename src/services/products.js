/* eslint-disable no-useless-catch */
import api from "./api";

export const getSliderProducts = async () => {
  try {
    const res = await api.get("products/");
    return res.data.products;
  } catch (err) {
    console.err(err);
    throw err;
  }
};
export const fetchAllCategories = async () => {
  try {
    const res = await api.get("products/categories/");
    return res.data;
  } catch (err) {
    console.err(err);
    throw err;
  }
};

export const getMensFashion = async () => {
  try {
    const mensFashionData = await api.get("products/category/mens-shirts");
    return mensFashionData.data.products;
  } catch (err) {
    console.err(err);
    throw err;
  }
};

export const getProductInfo = async (pid) => {
  try {
    const product = await api.get(`products/${pid}`);
    return product.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getSingleCategory = async (category) => {
  try {
    const fetchCat = await api.get(`products/category/${category}`);
    return fetchCat.data.products;
  } catch (err) {
    throw err;
  }
};
