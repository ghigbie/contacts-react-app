import React, {Component} from 'react';

class ListComponent extends Component{
    render(){
        return(
            <ol className="contact-list">
                {this.props.contacts.map((contact, index) => (<li key={index}>{contact.name}</li>))}
            </ol>
        );
    }
}

export default ListComponent;