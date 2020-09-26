import React, { Component } from 'react';
import ContactList from "./contactList";
import * as ContactAPI from "./utils/ContactsAPI"
import CreateContact from "./CreateContact";
import {Route} from 'react-router-dom'

class App extends Component {
    constructor(props) {
    super(props);
    this.state =  {
        contacts: [],
        screen: "list",
        }
    }
    componentDidMount() {
        ContactAPI.getAll().then(contacts=>{
            this.setState({
                contacts: contacts
            })
        })
    }
    createContact = (values)=>{
        ContactAPI.create(values).then((values)=>{
            this.setState({
                contacts: this.state.contacts.concat([values])
            })
        })
    }

    removeContact(contact){
        let contactList = this.state.contacts
        contactList = contactList.filter(item=>item.id!==contact.id)
        this.setState({
            contacts: contactList
        })
        ContactAPI.remove(contact)
    }
  render() {
    return (
      <div>
        <Route exact path='/' render={()=>
            <ContactList contacts={this.state.contacts} onDeleteContact={(i) => this.removeContact(i)}/>
        }/>
        <Route path='/create' render={({history})=> <CreateContact onCreateContact={(values)=>{
            this.createContact(values)
            history.push('/')
        }}/>}/>
      </div>
    );
  }
}

export default App;
