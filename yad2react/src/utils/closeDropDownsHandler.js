export default event => {
  if (
    !event.target.matches(
      ".details-button, #assetTypeDropDown, .filters__asset-type-checkbox__input, .filters__asset-type-checkbox__list,"
      + ".filters__asset-type-checkbox__list-item, #roomsDropDown, .filters__rooms-picker-container"
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
