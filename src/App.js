import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/shared/Header";
import FetchRandomUser from "./components/FetchRandomUser";
import Counter from "./components/Counter";
import ImageSlider from "./components/ImageSlider";
import ValidationForm from "./components/ValidationForm";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  state = {
    visible: true,

    count: 0,
  };
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<FetchRandomUser />} />
            <Route
              path="/counter"
              element={
                <Counter
                  count={this.state.count}
                  increment={this.increment}
                  decrement={this.decrement}
                />
              }
            />
            <Route path="/imageslider" element={<ImageSlider />} />
            <Route path="/validationform" element={<ValidationForm />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
