import React from 'react';

import initialData from "./initial-data";

class App extends React.Component{
  state = initialData;

  render() {
      return (
        <h1> Helllo </h1>
      )
  }
}

export default App;
