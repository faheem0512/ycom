import React from 'react';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Switch>
          <Route path='/' render={()=><div>home</div>} exact/>
          <Route path='/1' render={()=><div>One</div>} />
          <Route path='/2' render={()=><div>Two</div>} />
          <Route path='/3' render={()=><div>Three</div>} />
        </Switch>
      </div>
  );
}

export default App;
