import React, { useEffect, useState } from 'react';

import { authenticate } from '../services/api';

const AuthContext = React.createContext({});

const AuthProvider = ( props ) => {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ id: null, name: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token !== null ) {
      setToken(token);
      setUser(JSON.parse(localStorage.getItem("User")));
    }
  }, []);

  useEffect(() => {
    if(token === null) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    }

    setIsAuthenticated( (token !== null) );
  }, [token, user]);

  const login = async (login, password) => {
    const response = await authenticate(login, password);

    if( response.status === 200 && response.data.auth === true ) {
      setToken(response.data.token);
      const userData = { id: 1, name: "Felipe" };
      setUser(userData);

      return true;
    }

    return false;
  }

  const logout = () => {
    setUser({});
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{
      user,
      token,
      isAuthenticated,
      login,
      logout
    }}>
      { props.children }
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };
