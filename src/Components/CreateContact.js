import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageImport from './ImageImport';

class CreateContact extends Component{
    render(){
        return(
            <div>
                <Link className="close-create-contact"
                      to="/">
                    Close
                </Link>
            
                <form className="create-contact-form">
                    <ImageImport className="create-contact-avatar-imput"
                                 name="avatarURL"
                                 maxHeight={64}/>
                    <div className="create-contact-detail">
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="text" name="handle" placeholder="Handle"/>
                        <button>Add Contact</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateContact;