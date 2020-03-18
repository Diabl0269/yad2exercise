import axios from "axios";

export default async () => {
  const { token } = localStorage;
  if (!token) return;
  try {
    const user = await axios.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return user.data;
  } catch {
    return;
  }
};
