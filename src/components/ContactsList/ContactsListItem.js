import React from 'react';
import PropTypes from 'prop-types';

function ContactsListItem({ i, name, number, onDeleteContact }) {
    return (
        <>
            <td>{i}</td>
            <td>{name}</td>
            <td>{number}</td>
            <td>
                <button type="button" onClick={onDeleteContact}>
                    Delete
                </button>
            </td>
        </>
    );
}

ContactsListItem.propTypes = {
    i: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;
