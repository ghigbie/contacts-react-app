import React, { Component } from 'react';
import ListContacts from './Components/ListContacts';
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
