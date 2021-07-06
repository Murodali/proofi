import React, { Component } from 'react';
import {Form,Row,Col,Button} from 'react-bootstrap'


class forms extends Component {

    constructor() {
        super();
    
        this.state = { checked: false };
        this.state = { checked_second: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange_second = this.handleChange_second.bind(this);
      }
    
      handleChange() {
        this.setState({
          checked: !this.state.checked
        })
      }

      handleChange_second(){
          this.setState({checked_second:!this.state.checked_second})
      }

    render() {

        const hidden = this.state.checked ? '' : 'hidden';
        const hidden_second = this.state.checked_second ? '' : 'hidden_second';
        return (
            <div className=" second-component ">

                <div className="container"> 
                
                
                
                </div>
                
                <div className="form-container"> 
                <div className="col form">

                    <Form>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" className="big-one"/>
                        </Form.Group>


                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>
                        <div className="checkbox" >
                        Есть паспортные данные
                            <label class="switch">
                                    <input type="checkbox" checked={this.state.checked}
                                        onChange={this.handleChange} />
                                <span class="slider"></span>
                            </label>
                        </div>

          

          
                        <Row className="mb-3 mt-4">
                            <Form.Group as={Col} controlId="formGridEmail"  className={hidden} id="passport">
                           
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword"  className={hidden} id="passport">
                         
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>

                        <div className="checkbox_second" >
                        Есть паспортные данные
                            <label class="switch-two">
                                    <input type="checkbox" checked_second={this.state.checked_second}
                                        onChange={this.handleChange_second} />
                                <span class="slider-two"></span>
                            </label>
                        </div>

          

          
                        <Row className="mb-3 mt-4">
                            <Form.Group as={Col} controlId="formGridEmail"  className={hidden_second} id="passport">
                           
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword"  className={hidden_second} id="passport">
                         
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Я даю свое согласие на обработку моих персональных данных, на условиях и в соответствии с целями, указанными в Политике конфиденциальности
                                </label>
                            </div>
                            
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Я согласен с условиями Пользовательского соглашения
                                </label>
                            </div>


                            <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" className="big-one"/>
                        </Form.Group>


                                

         




                        <Button variant="primary" type="submit">
                        Проверить за 250 ₽
                        </Button>
                    </Form>

                </div>

                <div className="col second">
                <h4>Найдем для отчета: </h4>
                <p>Долги, алименты, арест имущества</p>
                <p>Долги, алименты, арест имущества</p>
                <p>Долги, алименты, арест имущества</p>
                <p>Долги, алименты, арест имущества</p>
                <p>Долги, алименты, арест имущества</p>
                <p>Долги, алименты, арест имущества</p>
                <p>Долги, алименты, арест имущества</p>
                <p>Долги, алименты, арест имущества</p>
                <p>Долги, алименты, арест имущества</p>
                <p>Долги, алименты, арест имущества</p>
                <p>Долги, алименты, арест имущества</p>
                <p>Долги, алименты, арест имущества</p>
                <p>Долги, алименты, арест имущества</p>
                <p>Долги, алименты, арест имущества</p>
                </div>
                
                </div>
            </div>
        );
    }
}

export default forms;