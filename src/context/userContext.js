import { createContext, useState } from "react";



 const INITIAL_STATE = {
    userEmail:"",
    userName:null,
    userId:""
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
