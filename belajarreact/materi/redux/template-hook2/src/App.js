import React from 'react';
import AppContext from './AppContext';
import Header from './Component/Header'
import Home from './Component/Home';
import storeContext from './Store/storeContext';

const {DataProvider} = storeContext;
const App =()=>{
  return(
    <DataProvider>
    <AppContext>
      <Header />
      <Home />
    </AppContext>
    </DataProvider>
  )
}

export default App