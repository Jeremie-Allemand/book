import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/MainPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers/reducer'
import './styles/index.css';

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);