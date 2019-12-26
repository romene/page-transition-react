import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./styles.css";

function App() {
  return (
    <Router>
      <Route
        render={({ location }) =>
          console.log(location) || (
            <div style={{ width: 64 }}>
              <ul style={{ display: "flex" }}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </ul>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="page"
                >
                  <Switch location={location}>
                    <Route exact path="/">
                      <HomePage />
                    </Route>
                    <Route path="/about">
                      <About />
                    </Route>
                    <Route path="/dashboard">
                      <Dashboard />
                    </Route>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          )
        }
      />
    </Router>
  );
}

function HomePage() {
  return (
    <div
      style={{
        backgroundColor: "red",
        width: "100vw",
        height: `calc(100vh - 64px)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1>HomePage</h1>
    </div>
  );
}
function About() {
  return (
    <div
      style={{
        backgroundColor: "blue",
        width: "100vw",
        height: `calc(100vh - 64px)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1>About Page</h1>
    </div>
  );
}
function Dashboard() {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        width: "100vw",
        height: `calc(100vh - 64px)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1>Dashboard</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
