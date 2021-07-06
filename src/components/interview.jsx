import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


class interview extends Component {


    constructor() {
        super();

        this.state = { checked: false };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange() {
        this.setState({
            checked: !this.state.checked
        })
    }


    render() {

        const textarea = this.state.checked ? '' : 'textarea';
        return (
            <div className="interview">

                <div className="main-text">
                    <h1>Не нашли, что искали? </h1>
                    <p> Расскажите нам, какую информацию в отчете вы бы хотели видеть?</p>

                </div>

                <div className="columns">
                    <div className="col">
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Недвижимость в собственности" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Наличие аккаунтов в соц. сетях" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Поиск новостей и упоминаний в сети" />
                        </Form.Group>


                    </div>

                    <div className="col">
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="История продаж на Авито и Юла" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Поиск по фотографиям" />
                        </Form.Group>



                        <Form.Check>
                            <Form.Check.Input onClick={this.handleChange} class="c9" />
                            <Form.Check.Label>Другое</Form.Check.Label>

                        </Form.Check>



                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" className={textarea}>

                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>



                    </div>
                </div>

                <div className="email">
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label><b>Оповестим о запуске новых функций по электронной почте</b></Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                    </Form>

                    <button a hrfe="singin" type="button" class="btn btn-primary  check">Отправить форму</button>  
                </div>

            </div>
        );
    }
}

export default interview;