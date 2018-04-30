import React, { Component } from 'react';
import ListContacts from './Components/ListContacts';
import CreateContact from './Components/CreateContact';
//import contactsData from './services/dataService';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  
  state={
    contacts: [],
    screen: 'create'
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
        {this.state.screen === 'list' && (
          <ListContacts contacts={this.state.contacts} 
                        onDeleteContact={this.removeContact}/>)}
                        
        {this.state.screen === 'create' && (
          <CreateContact />)}
      </div>
    );
  }
}

export default App;
