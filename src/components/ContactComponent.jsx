import React from "react";
import PropTypes from 'prop-types'; 
import { Contact } from "./models/contact.class";

const ContactComponent = ({contact}) => {
    
    return (
        <>
            <h1>YOUR CONTACTS:</h1>
            <h2>Name: {contact.name}</h2>            
            <h3>Lastname: {contact.lastname}</h3>
            <h2>Email: {contact.email}</h2>            
            <h2>Status: {contact.connected ? "Contacto En Línea" : 'Contacto no disponible'}</h2>            
        
        </>
    )
}

ContactComponent.propTypes = {

    contact: PropTypes.instanceOf(Contact)

}

export default ContactComponent;