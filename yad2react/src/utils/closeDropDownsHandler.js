export default event => {
  if (
    !event.target.matches(
      ".details-button, #assetTypeDropDown, #moreTypesFilterButton, .checkbox__input, .filters__asset-type-checkbox__list,"
      + ".checkbox__list-item, #roomsDropDown, .filters__rooms-picker-container, .checkbox"
    )
  ) {
    const dropdowns = Array.from(
      document.querySelectorAll(".details__dropdown, #assetTypeDropDown, #roomsDropDown")
    );
    dropdowns.forEach(dropdown => {
      dropdown.style.display = "none";
    });
  }
};
