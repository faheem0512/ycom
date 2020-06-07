import React from "react";
import PropTypes from 'prop-types';
import {getRelativeTime,getDomainName} from "../../utility";
import HideButton from "../buttons/HideButton";
import UpVoteButton from "../buttons/UpVoteButton";

const Row = (props) => {
    const {num_comments, points, title, url, author, created_at, isEven, objectID} = props;
    return <tr className={`${isEven?'app-table__row--even':''} app-table__row`}>
        <td>{num_comments}</td>
        <td>{points}</td>
        <td>
            <UpVoteButton objectID={objectID} />
        </td>
        <td className='app-table__detail_row'>
            <span className='app-table__detail_row--title'>{title} &nbsp;</span>
            {url?<a href={url} className='app-table__detail_row--link'>({getDomainName(url)})</a>:'-'}
            <span className='app-table__detail_row--by'> by </span>
            <span className='app-table__detail_row--author'> {author} </span>
            <span className='app-table__detail_row--time'> {getRelativeTime(created_at)} </span>
            <span className='app-table__detail_row--hide'>[ <HideButton objectID={objectID} /> ]</span>
        </td>
    </tr>;

};

Row.propTypes = {
    num_comments: PropTypes.number,
    points: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
    author: PropTypes.string,
    created_at: PropTypes.string,
    isEven: PropTypes.bool.isRequired,
    objectID: PropTypes.string.isRequired,
};

export default Row;