import React from 'react';
import PropTypes from 'prop-types';

function ContactsListItem({ i, name, number }) {
    return (
        <>
            <td>{i}</td>
            <td>{name}</td>
            <td>{number}</td>
        </>
    );
}

ContactsListItem.propTypes = {
    i: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default ContactsListItem;
