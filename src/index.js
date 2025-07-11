import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import Home from './pages/Home'
import store from './redux/store'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom';

ReactDOM.render(
  //render react funtion open
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
