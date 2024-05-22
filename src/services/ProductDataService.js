import axios from "axios";

const base_url = "https://devapi.mvp.atopd.in/api";


export const getAllCategoriesDetail = async () => {
    try {
        const response = await axios.get(`${base_url}/Category`);
        if (response.status !== 200) {
            throw new Error("Failed to fetch data");
        }
        const productCategories = response.data;
        //console.log(productCategories);
        return productCategories;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
