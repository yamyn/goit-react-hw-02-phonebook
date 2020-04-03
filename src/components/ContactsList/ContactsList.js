import React from 'react';
import PropTypes from 'prop-types';

import { table, row, headrow } from './ContactsList.module.css';
import ContactsListItem from './ContactsListItem';

const ContactsList = ({ contacts }) => (
    <table className={table}>
        <thead>
            <tr className={`${row} ${headrow}`}>
                <th>#</th>
                <th>Name</th>
                <th>Number</th>
            </tr>
        </thead>

        <tbody>
            {contacts.map(({ id, name, number }, i) => (
                <tr
                    key={id}
                    className={row}
                    style={{
                        backgroundColor: `${i % 2 === 1 ? '#fff' : '#ecf2f3'} `,
                    }}
                >
                    <ContactsListItem i={i + 1} name={name} number={number} />
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
};

export default ContactsList;
