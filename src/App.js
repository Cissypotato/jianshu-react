import React from 'react';
import {Provider} from 'react-redux'
import store from './store'
import {GlobalStyle} from'./style.js';
import Header from './common/header'
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Provider store={store}>
        <Header/>
      </Provider>
    </div>
  );
}

export default App;
