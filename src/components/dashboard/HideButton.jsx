import React from "react";
import PropTypes from 'prop-types';

const HideButton = ({objectID}) => {
    const onClick = (objectID) => () => {
        // dispatch action to hide row
    };
    return <button className='hide-button' onClick={onClick(objectID)}>
        hide
    </button>
};

HideButton.propTypes = {
    objectID: PropTypes.string.isRequired
};

export default HideButton;