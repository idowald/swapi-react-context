import React from 'react';
import Modal from 'react-modal';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './modules/authentication/components/loginPage/loginPage';
import { RequireAuth } from './modules/authentication/components/requireAuth';
import { StarWarsPage } from './modules/starWars/starWarsPage';
import { LogoutPage } from './modules/authentication/components/logoutPage/logoutPage';
import { AppBar } from './modules/common/appBar/appBar';
import { Container } from './modules/common/container/containr';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Container>
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
      </Container>
    </div>
  );
}
Modal.setAppElement('#root');

export default App;
