import React from 'react';
import PropTypes from 'prop-types';

function ContactsListItem({ index, name, number, onDeleteContact }) {
    return (
        <>
            <td>{index}</td>
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
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;
