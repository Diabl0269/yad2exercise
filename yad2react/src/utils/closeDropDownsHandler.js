export default (event) => {
    if (!event.target.matches(".details-button, #assetTypeDropDown, .checkbox_input, .checkbox_list, .checkbox_list-item")) {
      console.log('hey');
      
      const dropdowns = Array.from(document.querySelectorAll(".details__dropdown, #assetTypeDropDown"));
      dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
      });
    }
  };