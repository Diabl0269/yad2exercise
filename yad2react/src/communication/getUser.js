import axios from "axios";

export default async () => {
  const { id } = localStorage;
  if (!id) return;
  try {
    const res = await axios.get(`/users/${id}`);        
    return res.data;
  } catch {
    return;
  }
};
