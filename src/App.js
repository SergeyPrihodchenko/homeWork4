
import NavLinks from './components/NavLinks';
import Routers from './components/Routers';
import React from 'react';





function App(props) {


 

  return (
    <div className="App">
      <NavLinks/>

      <Routers data={props.data}/>

    </div>
  );
}

export default App;
