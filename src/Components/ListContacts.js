import React, {Component} from 'react';


class ListComponent extends Component{
    render(){
        return(
            <ol className="contact-list">
                {this.props.contacts.map((contact) => (
                    <li key={contact.id}>
                        {contact.name}
                    </li>
                ))}s
            </ol>
        );
    }
}

export default ListComponent;