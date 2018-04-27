import React, { Component } from 'react';
import contacts from './services/dataService';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListContacts contacts={contacts} />
      </div>
    );
  }
}

export default App;
