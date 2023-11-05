import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseconfig"; 


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // This component will wrap the application and provide the authentication context to all its child components.
  const [currentUser, setCurrentUser] = useState({}); // This state will store information about the currently signed-in user.

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      // This value represents an unsubscribe function. It allows you to remove the event listener when the component unmounts.
      unsub();
    };
  }, []); //( onAuthStateChanged) -- This is a Firebase Authentication function. It listens for changes in the user's authentication state. When the state changes, it calls the provided callback function with the user's information.

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
