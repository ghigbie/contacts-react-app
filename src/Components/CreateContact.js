import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageImports from './ImageImports';

class CreateContact extends Component{
    render(){
        return(
            <div>
                <Link className="close-create-contact"
                      to="/">
                    Close
                </Link>
            
            </div>
        );
    }
}

export default CreateContact;