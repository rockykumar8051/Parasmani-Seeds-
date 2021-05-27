import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./component/header";
import Home from "./component/Home";
import Footer from "./component/footer";
import Product from "./component/Product";
import About from "./component/About";
import Contact from "./component/Contact";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
         <Route exact path="/contact">
         <Contact/>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
