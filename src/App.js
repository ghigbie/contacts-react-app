import React, { Component } from 'react';
import ListContacts from './Components/ListContacts';
import CreateContact from './Components/CreateContact';
import { Route } from 'react-router-dom';
//import contactsData from './services/dataService';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  
  state={
    contacts: [],
    screen: 'list'
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
        <Route exact path="/" render={() => (
          <ListContacts contacts={this.state.contacts} 
                        onDeleteContact={this.removeContact}
                        onNavigate={() => {
                          this.setState(() => ({screen: 'create'}));
                        }}/>)}/>
                        
        <Route path="/create" render={() => (
          <CreateContact />)} />
      </div>
    );
  }
}

export default App;
