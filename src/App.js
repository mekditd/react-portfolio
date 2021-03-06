import React from "react";
// import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Wrapper>
                    <Route exact path="/" component={About} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    
                </Wrapper>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
