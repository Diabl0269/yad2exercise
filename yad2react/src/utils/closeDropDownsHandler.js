export default (event) => {
    if (!event.target.matches(".details-button, #assetTypeDropDown, .checkbox__input, .checkbox__list, .checkbox__list-item")) {
      console.log('hey');
      
      const dropdowns = Array.from(document.querySelectorAll(".details__dropdown, #assetTypeDropDown"));
      dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
      });
    }
  };