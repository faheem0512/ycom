import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAction = (action) => {
  const dispatch = useDispatch();
  const [isFetching, data, error,hideNext,message] = useSelector((state) => [
    state.isFetching,
    state.data,
    state.error,
    state.hideNext,
    state.message
  ]);
  const dispatchableAction = useCallback(
    (...args) => dispatch(action(...args)),
    [dispatch]
  );
  return [{ isFetching, data, error,hideNext, message }, dispatchableAction];
};

export default useAction;
