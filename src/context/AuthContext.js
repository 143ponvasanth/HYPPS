import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'student',
  });
  const [currentRole, setCurrentRole] = useState('student');

  const login = (userData) => {
    setUser(userData);
    setCurrentRole(userData.role);
  };

  const logout = () => {
    setUser(null);
    setCurrentRole('student');
  };

  return (
    <AuthContext.Provider value={{ user, currentRole, setCurrentRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};