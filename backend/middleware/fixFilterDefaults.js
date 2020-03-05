module.exports = (req, res, next) => {  
  for (let [key, value] of Object.entries(req.body)) {
    req.body[key] = value;
    if (typeof value === "object")    
      for (let [innerKey, innerValue] of Object.entries(value)) {        
        req.body[key][innerKey] = innerValue === "" ? undefined : innerValue;        
      }
  }  
  next();
};