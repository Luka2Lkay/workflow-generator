import axios from "axios";

interface Props {
  description: string;
  url: string;
}

export const analyzeWorkflow = async ({ url, description }: Props) => {
  try {
    const response = await axios.post(url, { description });

    return response;
  } catch (error) {
    console.error("Failed to post", error);
    throw new Error("Failed to post");
  }
};
