import { useRoutes } from "hookrouter";
// import configureStore from "./store/configureStore";
import routes from "./routes/router";

const App = () => {
  const routeResult = useRoutes(routes);
  return routeResult;
};

export default App;
