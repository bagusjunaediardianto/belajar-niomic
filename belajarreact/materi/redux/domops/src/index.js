import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';

// const stateMenu = {
//   activeItem : "home"
// };

// // reducer
// const reducerMenu = (state=stateMenu,action)=>{
//   switch (action.type) {
//     case "ACTIVE_ITEM":
//       var stateActiveItem = {...state, activeItem : action.ActiveItem};
//       return stateActiveItem
  
//     default:
//       return state
//   }
// }

// const store = createStore(reducerMenu);

ReactDOM.render(
    <App />
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
