import { useState } from 'react';
import AppRouter from './routes/AppRouter';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App