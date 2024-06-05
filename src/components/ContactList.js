import React from "react";
import ContactCard from "./ContactCard";

const ContactList =(props)=>{
    console.log(props);

    const deleteContactHandler = (id) =>{
        props.getContactId(id);
    };
    const renderContactList = props.contacts.map((contact)=>{
        return(
            <ContactCard 
            contact={contact} 
            clickHandler = {deleteContactHandler} 
            key={contact.id} 
            />
            
        );
    });
    return(
        <div className="ui called list" style={{marginLeft:"20px",textAlign:"center",color:"white",marginTop:"50px"}}>{renderContactList}</div>
    )
};
export default ContactList;