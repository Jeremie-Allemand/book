import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/MainPage';
import BookPage from './pages/BookPage';
import UserPage from './pages/UserPage';
import ListPage from './pages/ListPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
// import reducer from './reducers/reducer'
// import './styles/index.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/book/:isbn" element={<BookPage/>}/>
          <Route path="/user/:id" element={<UserPage/>}/>
          <Route path="/list/:id" element={<ListPage/>}/>
          
        </Routes>
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);