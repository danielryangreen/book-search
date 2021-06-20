import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NavTabs from "./components/NavTabs";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
// import logo from "./logo.svg";
// import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
    // <div className="App">
    //   <div className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h2>Welcome to React</h2>
    //   </div>
    //   <p className="App-intro">
    //     To get started, edit <code>src/App.js</code> and save to reload.
    //   </p>
    // </div>
  );
}


export default App;
