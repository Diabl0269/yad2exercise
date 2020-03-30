export default states => {
  let data = {};
  for (let [key, value] of Object.entries(states)) {
    data[key] = value[0];
  }
  return data;
};
