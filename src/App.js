import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/shared/Header";
import FetchRandomUser from "./components/FetchRandomUser";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<FetchRandomUser />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
