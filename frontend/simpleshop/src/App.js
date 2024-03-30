// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import LoginView from './views/LoginView'
import HomeView from './views/HomeView'
import PrivateRoute from './routes/PrivateRoutes';

const About = () => <h1>About Page</h1>;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginView />} />
          
          <Route path="/" element={
            <PrivateRoute>
              <HomeView/>
            </PrivateRoute>
          } />
          <Route path="/about" element={
            <PrivateRoute>
              <About/>
            </PrivateRoute>
          } />
        </Routes>
    </Router>
    </Provider>
  );
}

export default App;
