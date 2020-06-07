import React from "react";
import PropTypes from 'prop-types';
import {upVoteRow} from "../../redux/actions";
import {useDispatch} from "react-redux";
const UpVoteButton = ({objectID}) => {
    const dispatch = useDispatch();
    const onClick = (objectID) => () => {
        dispatch(upVoteRow(objectID));
    };
    return <button className='up-vote-button' onClick={onClick(objectID)} />

};

UpVoteButton.propTypes = {
    objectID: PropTypes.string.isRequired
};

export default UpVoteButton;