import React from  'react';
import {BrowserRouter as Router,Route} from "react-router-dom"
import {Provider} from "react-redux";
import store from "./components/store/reducers/index";

import "./sass/main.scss"
import Header from "./components/Header"
import Navbar from './components/Navbar';
import Home from './components/Home'
import Cart from './components/Cart'
import Details from "./components/Details"
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <Provider store={store}>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/details/:id" exact component={Details} />
      <Route path="/About" exact component={About} />
      <Route path="/Contact" exact component={Contact} />
      <Footer />
      </Provider>
      </Router>
  );
}

export default App;
