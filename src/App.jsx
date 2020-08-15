import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Charts from "./components/Charts";
import Navigation from "./components/layout/Navigation";
import UploadChart from "./components/UploadChart";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Navigation />
            </div>
            <div className="col-md-8">
              <Switch>
                <Route path="/" exact component={Charts} />
                <Route path="/upload" exact component={UploadChart} />
              </Switch>
            </div>
          </div>
        </div>
      </>
      <Footer />
    </Router>
  );
}

export default App;
