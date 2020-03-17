import axios from "axios";

export default async (user,values) => {
  const { token } = localStorage;
  if (!token) return;
  const updates = {...user, ...values}
  const id = window.location.pathname.replace('/user/', '');

  try {
    const res = axios.patch(`/users/${id}`, updates,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return true;
  } catch {
      return false;
  }
};
