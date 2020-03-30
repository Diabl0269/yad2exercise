import axios from "axios";

export default async () => {
  const { token } = localStorage;
  if (!token) return;
  axios.defaults.headers.Authorization = token
  try {
    const res = await axios.get(`/users`);        
    return res.data;
  } catch {
    return;
  }
};
