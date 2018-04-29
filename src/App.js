import React, { Component } from 'react';
import ListContacts from './Components/ListContacts';
//import contactsData from './services/dataService';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  
  state={
    contacts: []
  }
  
  componentDidMount(){
    ContactsAPI.getAll()
      .then((contacts) => {
        this.setState(() => ({contacts}));
      });
  }
  
  removeContact = (contact) => {
    this.setState((prevState) => ({contacts: prevState.contacts.filter((c) => c.id !== contact.id)}));
    ContactsAPI.remove(contact);
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
