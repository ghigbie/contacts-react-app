import React, { Component } from 'react';
import ListContacts from './Components/ListContacts';
import contacts from './services/dataService';

class App extends Component {
  
  state={
    contacts: contacts
  }
  
  removeContact = (contact) => {
    this.setState((prevState) => {contacts: prevState.contacts.filter((c) => c.id !== contact.id)});
  }
  
  render() {
    return (
      <div className="App">
        <ListContacts contacts={contacts} />
      </div>
    );
  }
}

export default App;
