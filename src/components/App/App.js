import React, { Component } from 'react';
import shortid from 'shortid';

import styles from './App.module.css';

import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import CreateContactForm from '../CreateContactForm/CreateContactForm';

const filterContacts = (contacts, filter) => {
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
};

export default class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    changeFilter = event => {
        this.setState({ filter: event.target.value });
    };

    addContact = contact => {
        const isUniqueName = this.state.contacts.some(
            savedContact =>
                savedContact.name.toLowerCase() === contact.name.toLowerCase(),
        );

        if (isUniqueName) {
            return alert(`${contact.name} is already in contacts`);
        }
        const contactToAdd = {
            ...contact,
            id: shortid.generate(),
        };
        this.setState(state => ({
            contacts: [...state.contacts, contactToAdd],
        }));
    };

    deleteContact = id => {
        this.setState(state => ({
            contacts: state.contacts.filter(contact => contact.id !== id),
        }));
    };

    render() {
        const { contacts, filter } = this.state;
        const filteredContacts = filterContacts(contacts, filter);

        return (
            <div className={styles.container}>
                <h1>goit-react-hw-02-phonebook</h1>
                <Section title="Phonebook">
                    <CreateContactForm onAddContact={this.addContact} />
                </Section>
                <Section title="Contacts">
                    {this.state.contacts.length > 2 && (
                        <Filter
                            value={filter}
                            onChangeFilter={this.changeFilter}
                        />
                    )}
                    {filteredContacts.length > 0 ? (
                        <ContactsList
                            contacts={filteredContacts}
                            onDeleteContact={this.deleteContact}
                        />
                    ) : (
                        <Notification message="Contacts for query not found" />
                    )}
                </Section>
            </div>
        );
    }
}
