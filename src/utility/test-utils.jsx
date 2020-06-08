import React from "react";
import { render } from "@testing-library/react";
import {Provider} from "react-redux";
import configureStore from "../redux/configureStore";
import initialState from "../redux/initialState";
import { Router,Route } from "react-router-dom";
import { createMemoryHistory } from "history";

const store = configureStore(initialState);

const RouterMatchProvider = ({ children }) => {
  return <Provider store={store}>
    <Router history={createMemoryHistory({ initialEntries: ['/'] })}>
      <Route path={'/'} component={children} />
    </Router>
  </Provider>;
};


const renderWithRouterMatch = (ui,...options) => {
  return render(ui,{wrapper:RouterMatchProvider, ...options });
};



const customRender = (ui, ...options) => {
  return render(<Provider store={store}>
    {ui}
  </Provider>,{ ...options });
};

export * from "@testing-library/react";
export { customRender, renderWithRouterMatch };
