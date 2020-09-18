import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import Productitem from '../components/Productitem';

function Screen() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route exact path="/product" component={Product} />
                    <Route path="/product/:id" component={Productitem} />
                </Switch>
            </Router>
        </div>
    );
}

export default Screen;
