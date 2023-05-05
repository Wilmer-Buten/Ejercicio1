import React from 'react';
import { Contact } from '../models/contact.class';
import ContactComponent from '../ContactComponent';

const ContactListComponent = () => {

 const newContact = new Contact('Wilmer', 'Buten', 'wuten@gmail.com', true);  

return(
	<div>
        <ContactComponent contact={newContact}></ContactComponent>
	</div>

  )

}



export default ContactListComponent;

