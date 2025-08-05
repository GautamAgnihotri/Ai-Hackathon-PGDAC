import { baseUrl } from "../utils/config";
import axios from "axios";

export const loginLibrarian = async (email, password) => {
  try {
    const url = baseUrl + "/api/auth/login";
    const response = await axios.post(url, { email, password });

    return response.data;
  } catch (e) {
    console.log({ e });
  }
};
