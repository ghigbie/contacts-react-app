import React, {Component} from 'react';


const ListComponent = (props) =>{
        return(
            <ol className="contact-list">
                {props.contacts.map((contact) => (
                    <li key={contact.id}
                        className="contact-list-item">
                        <div className="contact-avatar"
                             style={{
                                 backgroundImage: `url(${contact.avatarURL})`
                             }}>
                        </div>
                        <div className="contact-detail">
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button className="contact-remove"
                                onClick={() => props.onDeleteContact}>Remove</button>
                    </li>
                ))}
            </ol>
        );
};

export default ListComponent;