import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./components/dashboard";
import "./App.css";
function App() {
  return (
    <main className="App">
      <Switch>
        <Route path="/:pageNo" component={Dashboard} exact />
        <Redirect from="/" to="/0" exact/>
        <Route path="/*" render={() => <div>Page Not Found</div>} />
      </Switch>
    </main>
  );
}

export default App;
