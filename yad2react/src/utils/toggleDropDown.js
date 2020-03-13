export default (event, id) => {    
    event.stopPropagation();
    let display = document.getElementById(id).style.display
    document.getElementById(id).style.display = display === "flex" ? 'none' : 'flex';
  };