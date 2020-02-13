import { useRoutes } from "hookrouter";
import configureStore from "./store/store";
import routes from "./routes/router";

const App = () => {
  // const [listings, dispatch] = useReducer(listingsReducer, []);
  const routeResulet = useRoutes(routes);
  return routeResulet;
};

export default App;
