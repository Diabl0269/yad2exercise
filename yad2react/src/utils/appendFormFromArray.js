export default (formData, array, fieldName) => {
    Array.from(array).forEach(obj => {
      formData.append(fieldName, obj);
    });
  };