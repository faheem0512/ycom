import React, { useEffect } from "react";
import { fetchNews } from "../../redux/actions";
import useAction from "../../hooks";
import Header from "../header";
import Row from "../row";
import {Link} from "react-router-dom";
import Loader from "../loader";

const Dashboard = (props) => {
  const {match} = props;
  const {
    params: {pageNo},
  } = match;
  const [{isFetching, data, error}, dispatchableAction] = useAction(
      fetchNews
  );
  useEffect(() => {
    dispatchableAction(pageNo-1);
  }, [dispatchableAction, pageNo]);

  return (
      <div>
        {isFetching && <Loader />}
        {error && <div>{error}</div>}
        {data && data.length > 0 && <table border={0} cellPadding={5} cellSpacing={0} className='app-table'>
          <Header/>
          <tbody>
          {data.map((item, index) => {
            const {num_comments, points, title, url, author, objectID, created_at} = item;
            return <Row num_comments={num_comments} points={points} title={title} key={`${index}__table_row`}
                        url={url} author={author} created_at={created_at} isEven={index % 2 === 0} objectID={objectID}/>
          })}
          </tbody>
        </table>}
        <nav>
            <Link to={`/${Number(pageNo-1)}`} className='nav-link' >Previous</Link>
            <span>&nbsp;|&nbsp;</span>
            <Link to={`/${Number(pageNo)+1}`} className='nav-link'>Next</Link>
        </nav>
        <div className='horizontal-divider' />
      </div>
  );
};

export default Dashboard;

