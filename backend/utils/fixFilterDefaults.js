module.exports = params => {
  for (let [key, value] of Object.entries(params)) {
    console.log(`${key}: ${value}`);
    if (typeof value === "object")
      for (let [key, value] of Object.entries(params)) {
        if (value === "") value = undefined;
      }
  }
};
