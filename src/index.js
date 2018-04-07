import React, {Component} from 'react';
import ReactDom from 'react-dom';
// import Main from './Components/Main'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Components/App'


const store = createStore(rootReducer)
ReactDom.render(<Provider store = {store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'));

//------------------------------------------------------------------------------