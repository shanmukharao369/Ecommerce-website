import React from "react";

 export const AuthContext = React.createContext({
//     contextValue: { token: "", isLoggedIn: false, login: (token) => {} 
// }

    token: "",
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
    userEmailId: "",
});

