import axios from "axios";

export default async values => {
  let formData = new FormData();
  formData.append("media", values.images[0]);
  formData.append("fields", JSON.stringify(values));

  try {
    const res = await axios.post("/listings/add", formData);
    if (res) {
      return true;
    }
  } catch {
    return false;
  }
};
