import React, { Component } from 'react';
import ListContacts from './Components/ListContacts';
import contactsData from './services/dataService';

class App extends Component {
  
  state={
    contacts: contactsData
  }
  
  removeContact = (contact) => {
    this.setState((prevState) => ({contacts: prevState.contacts.filter((c) => c.id !== contact.id)}));
  }
  
  render() {
    return (
      <div className="App">
        <ListContacts contacts={this.state.contacts} 
                      onDeleteContact={this.removeContact}/>
      </div>
    );
  }
}

export default App;
