import React from 'react';
import logo from './logo.svg';

import Button from "./Button";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: "Home"};
    }

    changeMenu(newState){
        this.setState({active : newState});
    }

    render() {
        const {active} = this.state;
        return (
            <header className="Header">
                <img src={logo} className="App-logo" alt="logo" />
                <ul>
                    <li className={active === "Home" ? 'active': ''} onClick={() => this.changeMenu("Home")}>Home</li>
                    <li className={active === "Sobre" ? 'active': ''} onClick={() => this.changeMenu("Sobre")}>Sobre</li>
                    <li className={active === "Contato" ? 'active': ''} onClick={() => this.changeMenu("Contato")}>Contato</li>
                </ul>
                <Button text="Login"/>
            </header>
          );
    }
}

export default Header;
