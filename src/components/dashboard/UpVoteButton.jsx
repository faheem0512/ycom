import React from "react";
import PropTypes from 'prop-types';

const UpVoteButton = ({objectID}) => {
    const onClick = (objectID) => () => {
        // dispatch action to hide row
    };
    return <button className='up-vote-button' onClick={onClick(objectID)} />

};

UpVoteButton.propTypes = {
    objectID: PropTypes.string.isRequired
};

export default UpVoteButton;