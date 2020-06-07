import React from "react";
import PropTypes from 'prop-types';
import {hideRow} from "../../redux/actions";
import {useDispatch} from "react-redux";

const HideButton = ({objectID}) => {
    const dispatch = useDispatch();
    const onClick = (objectID) => () => {
        // dispatch action to hide row
        dispatch(hideRow(objectID))
    };
    return <button className='hide-button' onClick={onClick(objectID)}>
        hide
    </button>
};

HideButton.propTypes = {
    objectID: PropTypes.string.isRequired
};

export default HideButton;