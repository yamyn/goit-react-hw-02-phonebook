import React from 'react';
import PropTypes from 'prop-types';
import { filter } from './Filter.module.css';

const NumberFilter = ({ value, onChangeFilter }) => (
    <div className={filter}>
        <p>Find contacts by name</p>
        <input
            type="text"
            value={value}
            onChange={onChangeFilter}
            placeholder="Enter name..."
        />
    </div>
);

NumberFilter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
};

export default NumberFilter;
