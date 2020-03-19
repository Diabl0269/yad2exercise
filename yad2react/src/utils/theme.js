export default {
  container: {
    "flex-direction": "row-reverse",
    display: "flex",
    position: "relative"
  },
  input: {
    width: "auto",
    "max-width": "183px",
    "border-radius": "2px",
    border: "1px solid #ccc",
    fontFamily: "Helvetica, sans-serif",
    fontSize: 16,
    fontWeight: 300,
    height: 40,
    padding: "10px 10px 10px 0",
    width: "auto"
  },
  inputFocused: {
    outline: "none"
  },
  inputOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  suggestionsContainer: {
    display: "none"
  },
  suggestionsContainerOpen: {
    backgroundColor: "#fff",
    border: "1px solid #aaa",
    display: "block",
    fontFamily: "Helvetica, sans-serif",
    fontSize: 16,
    fontWeight: 300,
    position: "absolute",
    top: 51,
    width: 280,
    zIndex: 2,
    "border-radius": "2px"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  suggestion: {
    cursor: "pointer",
    padding: "10px 20px"
  },
  suggestionHighlighted: {
    backgroundColor: "#ddd"
  }
};
