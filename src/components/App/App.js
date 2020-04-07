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
        contacts: [],
        filter: '',
    };

    componentDidMount() {
        const savedContacts = localStorage.getItem('contacts');

        if (savedContacts) {
            this.setState({ contacts: JSON.parse(savedContacts) });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.contacts !== this.state.contacts) {
            localStorage.setItem(
                'contacts',
                JSON.stringify(this.state.contacts),
            );
        }
    }

    changeFilter = e => {
        this.setState({ filter: e.target.value });
    };

    addContact = contact => {
        const isUniqueName = this.state.contacts.find(
            savedContact =>
                savedContact.name.toLowerCase() === contact.name.toLowerCase(),
        );

        if (isUniqueName)
            return alert(`${contact.name} is already in contacts`);
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
