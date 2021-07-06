import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap'


class navbar extends Component {
    render() {
        return (

            <Navbar collapseOnSelect expand="lg" className="navbar-dark">

                <div className="container ">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="/">Proofi</Navbar.Brand>
              
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav >
                        <Nav.Link href="#features">Для бизнеса</Nav.Link>
                        <Nav.Link href="#pricing">Статьи</Nav.Link>
                        <Nav.Link href="#pricing">О проекте</Nav.Link>
                        <Nav.Link href="#pricing">Контакты</Nav.Link>

                    </Nav>

                    <Nav className=" ms-auto ">
                        <Nav.Link href="#features" >Пример отчета <img src="./icons/Shape.png"></img></Nav.Link>
                      
                    </Nav>

                </Navbar.Collapse>
                <button a hrfe="singin" type="button" class="btn btn-primary ms-3 me-3">Вход для бизнеса</button>
                </div>

            </Navbar>
        );
    }
}

export default navbar;