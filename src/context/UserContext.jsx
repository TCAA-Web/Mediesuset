import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      setUserData(JSON.parse(localStorage.getItem("userData")));
    } else if (userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {props.children}
    </UserContext.Provider>
  );
};
