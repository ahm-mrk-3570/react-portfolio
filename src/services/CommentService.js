import axios from "axios";

const SERVER_URL = "http://localhost:9000";

export const getAllComments = async () => {
  const url = `${SERVER_URL}/comments`;
  return await axios.get(url);
}

export const addComment = async detail => {
  const url = `${SERVER_URL}/comments`;
  return await axios.post(url, detail);
}