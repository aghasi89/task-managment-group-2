// import React from 'react';
// import { Router, Route, Switch, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// // import Start from "./Components/Start";
// import { Login } from './Pages/Login';

// export default function App() {
//     return (
//       <div className="App">  
//         <Login />
//       </div>
//     );
//   }
  
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/Dashboard";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProtectedRoute from "./Routes";
import { useSelector } from "react-redux";
import  Start  from "./Pages/Start";
export default function App() {
  const auth = useSelector((state) => state.isAuthenticated);
  return (
    <Router>
      <Switch>
      <Route exact path="/start" component={Start} />
        <ProtectedRoute auth={auth} exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}
