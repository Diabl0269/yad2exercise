export default (e, type, setTouched, setErrors) => {
  if (!!!e.target.value) {
    const touchedObj = {};
    touchedObj[type] = true;
    setTouched(touchedObj);
    setErrors(type, "שדה חובה");
  }
};
