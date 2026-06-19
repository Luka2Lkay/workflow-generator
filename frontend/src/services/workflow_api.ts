// import axios from "axios";

const BASE_URL = import.meta.env.BASE_URL;

export const analyzeWorkflow = async (description: string) => {
  try {
    // const response = await axios.post(`${BASE_URL}/api/analyze`, {
    //   description,
    // });

    console.log(BASE_URL)
    // return response.data;
  } catch (error) {
    console.error("Failed to post", error);
    throw new Error("Failed to post");
  }
};
