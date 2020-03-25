export default event => {
  if (
    !event.target.matches(
      '.details-button, #assetTypeDropDown, #moreTypesFilterButton, .checkbox__input, .filters__asset-type-checkbox__list,' +
        '.checkbox__list-item, #roomsDropDown, #roomsDropDown *, .checkbox, #sortDropDown'
    )
  ) {
    const dropdowns = Array.from(
      document.querySelectorAll(
        '.details__dropdown, #assetTypeDropDown, #roomsDropDown, #sortDropDown'
      )
    )
    dropdowns.forEach(dropdown => {
      dropdown.style.display = 'none'
    })
  }
}
