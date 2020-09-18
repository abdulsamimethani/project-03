import React, { Component } from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';
import menu from "../Images/bars-solid.svg";
import cart from "../Images/shopping-cart-solid.svg";
import close from "../Images/times-solid.svg";


class Navbar extends Component {
    state = {
        toggle: false
    }
    menuToggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
        const { toggle } = this.state
        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={menu} width="20" alt="" />
                </div>
                <div className="logo">
                    <h1><Link to="/logo">Nike</Link></h1>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about" >About</Link></li>
                        <li><Link to="product">Product</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                        <li><Link to='/login'>Login/Register</Link></li>
                        <li className="close" onClick={this.menuToggle}><img src={close} width="20" alt="" /></li>
                    </ul>
                    <div className="cart">
                        <span>0</span>
                        <Link to="/cart">
                            <img src={cart} width="20" alt="" />
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}
export default Navbar;