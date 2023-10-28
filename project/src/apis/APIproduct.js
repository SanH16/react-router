import { axiosInstance } from "../configs/axiosInstance";

export const APIproducts = {
  getProducts: async () => {
    try {
      const result = await axiosInstance.get(`/products`);
      return result.data; // hanya ambil data jadi return spesifik result.data
    } catch (error) {
      console.error(error);
    }
  },
};
