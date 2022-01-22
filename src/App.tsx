import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './modules/authentication/components/loginPage/loginPage';
import { RequireAuth } from './modules/authentication/components/requireAuth';
import { StarWarsPage } from './modules/starWars/starWarsPage';
import { LogoutPage } from './modules/authentication/components/logoutPage/logoutPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/table"
          element={(
            <RequireAuth>
              <StarWarsPage />
            </RequireAuth>
          )}
        />
        <Route
          path="/logout"
          element={
            <LogoutPage />
              }
        />
        <Route
          path="/"
          element={(
            <RequireAuth>
              <StarWarsPage />
            </RequireAuth>
                )}
        />
      </Routes>
    </div>
  );
}

export default App;
