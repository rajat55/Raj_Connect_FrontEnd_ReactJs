import { createContext, useState } from "react";



 const INITIAL_STATE = {
    userEmail:"test51@gamil.com",
    userName:null,
    userId:"6457d893fde0e7497e4d2699"
 }

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUserEmail] = useState(INITIAL_STATE);

  return (
    <UserContext.Provider value={{  userEmail:user.userEmail ,userName:user.userName,userId:user.userId, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};


export { UserContextProvider };
