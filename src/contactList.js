import React from "react";

function ContactList(props){
    return (
        <ol className='contact-list'>
            {props.contacts.map(((contact)=>{
                return <li key={contact.id}>
                    <div className='contact-avatar' style={{
                        backgroundImage: `url(${contact.avatarURL})`
                    }}>
                    </div>
                    <div className='contact-details'>
                        <p>{contact.name}</p>
                        <p>{contact.handle}</p>
                    </div>
                    <button className='contact-remove'>
                        remove
                    </button>
                </li>
            }))}
        </ol>
    )
}

export default ContactList
