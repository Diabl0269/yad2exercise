import React, { useState, useEffect } from "react";
import { useRoutes } from "hookrouter";
import routes from "./routes/router";
import UserContext from "./context/UserContext";
import getUser from "./communication/getUser";

const App = () => {
  const router = useRoutes(routes);
  const user = useState({});
  
  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser();
      if (data) user[1](data);
    };
    fetchUser();
  }, []);

  return <UserContext.Provider value={user}>{router}</UserContext.Provider>;
};

export default App;
