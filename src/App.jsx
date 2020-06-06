import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect from="/" to="/1" />
        </Route>
        <Route path="/:pageNo" component={Home} exact />
        <Route path="/*" render={() => <div>Page Not Found</div>} />
      </Switch>
    </div>
  );
}

export default App;
