import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { AuthProvider } from './modules/authentication/context/authContext';
import { StarWarsContextProvider } from './modules/starWars/context/starWarsContext';

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <StarWarsContextProvider>
        <App />
      </StarWarsContextProvider>
    </AuthProvider>

  </BrowserRouter>,
  document.getElementById('root'),
);
