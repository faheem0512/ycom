import React, { useEffect } from "react";
import { fetchNews } from "../redux/actions";
import useAction from "../hooks";
import { Link } from "react-router-dom";

const Home = (props) => {
  const { match } = props;
  const {
    params: { pageNo },
  } = match;
  const [{ isFetching, data, error }, dispatchableAction] = useAction(
    fetchNews
  );
  useEffect(() => {
    dispatchableAction(pageNo);
  }, [dispatchableAction, pageNo]);
  return (
    <div>
      {isFetching && <h2>Loading...</h2>}
      {data && <div>{JSON.stringify(data)}</div>}
      <Link to="/2">Next</Link>
      <Link to="/3">Next</Link>
      <Link to="/1">Next</Link>
    </div>
  );
};

export default Home;
