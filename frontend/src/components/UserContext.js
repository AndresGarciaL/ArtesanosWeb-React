import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }) {
  const [rol_id, setRolId] = useState(null);

  const updateUserRole = (newRole) => {
    setRolId(newRole);
  };

  return (
    <UserContext.Provider value={{ rol_id, updateUserRole }}>
      {children}
    </UserContext.Provider>
  );
}
