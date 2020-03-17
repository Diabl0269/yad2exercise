import axios from "axios";

export default async (dispatch) => {
  const { token } = localStorage;
  if (!token) return;
  try {
    const user = await axios.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });    
    return dispatch(user.data.userDetails);
  } catch {
    return dispatch(false);
  }
};
