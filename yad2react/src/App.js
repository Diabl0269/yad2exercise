import React from 'react';
import { useRoutes } from "hookrouter";
import routes from "./routes/router";
import UserContext from './context/UserContext';

const App = () => {
  const routeResult = useRoutes(routes);
  return <UserContext.Provider>{routeResult}</UserContext.Provider>;
};

export default App;
