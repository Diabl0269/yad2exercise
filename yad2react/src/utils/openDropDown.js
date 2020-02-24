export default (event, id) => {    
    event.stopPropagation();
    document.getElementById(id).style.display = "flex";
  };