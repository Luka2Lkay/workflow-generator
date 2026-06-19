import axios from "axios";
import { type Analysis } from "../interfaces/interface";

const BASE_URL =
  import.meta.env.VITE_BASE_URL ||
  "https://workflow-generator-backend.onrender.com";

export const analyzeWorkflow = async (description: string) => {
  try {
    console.log("workflow: ", description);
    console.log("url :", BASE_URL);
    const response = await axios.post<Analysis>(`${BASE_URL}/api/analyze`, {
      description,
    });

    console.log("data: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to post", error);
    throw new Error("Failed to post");
  }
};
