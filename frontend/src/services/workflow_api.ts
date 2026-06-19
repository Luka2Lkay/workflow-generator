// import axios from "axios";
// import { type Analysis } from "../interfaces/interface";

const BASE_URL = import.meta.env.BASE_URL;


export const analyzeWorkflow = async (description: string) => {
  try {
    console.log(description)
    console.log(BASE_URL)
    // const response = await axios.post<Analysis>(
    //   `${BASE_URL}/api/analyze`,
    //   {
    //     description,
    //   },
    // );

    // return response.data
  } catch (error) {
    console.error("Failed to post", error);
    throw new Error("Failed to post");
  }
};
