import React, { useEffect,Fragment } from "react";
import { fetchNews } from "../../redux/actions";
import useAction from "../../hooks";
import Header from "../header";
import Row from "../row";
import Loader from "../loader";
import {Error,NoData} from "../views";
import Link from "../links"
import "./index.css";

const Dashboard = (props) => {
  const {match} = props;
  const {
    params: {pageNo},
  } = match;
  const [{isFetching, data, error,hideNext,message}, dispatchableAction] = useAction(
      fetchNews
  );
  useEffect(() => {
    dispatchableAction(pageNo);
  }, [dispatchableAction, pageNo]);

  return (
      <div>
        {isFetching && <Loader />}
        {error && <Error message={error} />}
          {data && data.length > 0 ? <Fragment>
                  <table border={0} cellPadding={5} cellSpacing={0} className='app-table'>
                      <Header/>
                      <tbody>
                      {data.map((item, index) => {
                          const {num_comments, points, title, url, author, objectID, created_at} = item;
                          return <Row num_comments={num_comments} points={points} title={title} key={`${index}__table_row`}
                                      url={url} author={author} created_at={created_at} isEven={index % 2 === 0} objectID={objectID}/>
                      })}
                      </tbody>
                  </table>
                  <nav>
                      <Link to={`/${Number(pageNo-1)}`} disabled={pageNo <=0 } >Previous</Link>
                      <span>&nbsp;|&nbsp;</span>
                      <Link to={`/${Number(pageNo)+1}`} disabled={hideNext}>Next</Link>
                  </nav>
                  <div className='horizontal-divider' />
              </Fragment>: <NoData message={message}/>}
      </div>
  );
};

export default Dashboard;

