import axios from "axios";
import { appConstants } from "../app-constant";

export const getAllCategoriesDetail = async () => {
  try {
    const response = await axios.get(`${appConstants.apiUrl}/Category`);
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    const productCategories = response.data;

    return productCategories;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getAllFeaturedProductDetail = async () => {
  const resp = await axios.get(`${appConstants.apiUrl}/Catelog?featured=true`);

  return resp.data;
};

export const getFeatureProductById = async (id) => {
  const resp = await axios.get(`${appConstants.apiUrl}/Product?ProdId=${id}`);
  return resp.data;
};
