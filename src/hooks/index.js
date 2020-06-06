import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAction = (action) => {
  const dispatch = useDispatch();
  const [isFetching, data, error] = useSelector((state) => [
    state.isFetching,
    state.data,
    state.error,
  ]);
  const dispatchableAction = useCallback(
    (...args) => dispatch(action(...args)),
    [dispatch]
  );
  return [{ isFetching, data, error }, dispatchableAction];
};

export default useAction;
