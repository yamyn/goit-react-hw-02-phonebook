import React, { Component } from 'react';
import shortid from 'shortid';

import styles from './App.module.css';

import Section from '../Section/Section';

export default class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        name: '',
    };

    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    /*
     * Вызывается при отправке формы
     */
    handleSubmit = event => {
        event.preventDefault();
        const name = event.currentTarget.elements.name.value;
        const contactToAdd = {
            name,
            id: shortid.generate(),
        };
        this.setState(state => ({
            contacts: [...state.contacts, contactToAdd],
        }));
    };
    render() {
        const { name } = this.state;

        return (
            <div className={styles.container}>
                <h1>goit-react-hw-02-phonebook</h1>
                <Section title="Phonebook">
                    <form onSubmit={this.handleSubmit} className={styles.form}>
                        <p>Name</p>
                        <input
                            type="text"
                            placeholder="Enter contact`s name"
                            value={name}
                            onChange={this.handleChange}
                            name="name"
                        />
                        <button className={styles.button} type="submit">
                            Add contact
                        </button>
                    </form>
                </Section>
                <Section title="Contacts">
                    <ul className={styles.list}>
                        {this.state.contacts.map(({ id, name }) => (
                            <li key={id} className={styles.item}>
                                {name}
                            </li>
                        ))}
                    </ul>
                </Section>
            </div>
        );
    }
}
