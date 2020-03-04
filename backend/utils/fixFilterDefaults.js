module.exports = data => {
  console.log(data);
  
  const newData = {};
  for (let [key, value] of Object.entries(data)) {
    newData[key] = value;
    if (typeof value === "object")    
      for (let [innerKey, innerValue] of Object.entries(value)) {        
        newData[key][innerKey] = innerValue === "" ? undefined : innerValue;        
      }
  }

  console.log(newData);
};