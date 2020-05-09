import React from 'react';
import PropTypes from 'prop-types';

import { table, row, headrow } from './ContactsList.module.css';
import ContactsListItem from './ContactsListItem';

const ContactsList = ({ contacts, onDeleteContact }) => (
    <table className={table}>
        <thead>
            <tr className={`${row} ${headrow}`}>
                <th>#</th>
                <th>Name</th>
                <th>Number</th>
                <th></th>
            </tr>
        </thead>

        <tbody>
            {contacts.map(({ id, name, number }, index) => (
                <tr
                    key={id}
                    className={row}
                    style={{
                        backgroundColor: `${
                            index % 2 === 1 ? '#fff' : '#ecf2f3'
                        } `,
                    }}
                >
                    <ContactsListItem
                        i={index + 1}
                        name={name}
                        number={number}
                        onDeleteContact={() => onDeleteContact(id)}
                    />
                </tr>
            ))}
        </tbody>
    </table>
);

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
