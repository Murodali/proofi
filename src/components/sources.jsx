import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class sources extends Component {
    render() {
        return (
            <div className="sources">
              

                <div className="main-text">
                    <h1>Сформируем единый отчет за 5 минут</h1>
                    <p>Отчет придет на почту в виде PDF и будет доступен в личном кабинете</p>
                </div>



                <div className="columns ">
                    <div className="col">
                        <div className="text">
                            <p><b> База недействительных паспортов МВД </b></p>
                            <p>Проверить, действителен ли паспорт человека</p>
                        </div>

                        <div className="text">
                            <p><b> Бюро кредитных историй </b></p>
                            <p>Проверить человека по базе и выяснить, находится<br></br> ли он в розыске</p>
                        </div>

                        <div className="text">
                            <p><b> База розыска МВД </b></p>
                            <p>Проверить человека по базе и выяснить, находится<br></br> ли он в розыске</p>
                        </div>

                        <div className="text">
                            <p><b> База Росфинмониторинг </b></p>
                            <p>Проверить человека по базе и выяснить, находится<br></br> ли он в списках террористов и экстремистов</p>
                        </div>

                        <div className="text">
                            <p><b> БДИП ФССП </b></p>
                            <p>Проверить человека по базе Федеральной службы<br></br> судебных приставов и узнать, есть ли у него долги</p>
                        </div>

                    </div>
                    <div className="col ">
                    <div className="text">
                            <p><b>Федеральная нотариальная палата </b></p>
                            <p>Проверить человека по базе Федеральной <br></br> нотариальной палаты и узнать, является ли он <br></br>залогодателем или залогодержателем</p>
                        </div>

                        <div className="text">
                            <p><b>База ГИБДД </b></p>
                            <p>Проверить водительское удостоверение на<br></br> действительность и получить его характеристики<br></br> по базе ГИБДД</p>
                        </div>

                        <div className="text">
                            <p><b>Налоговая служба (ЕГРЮЛ, ЕГРИП, ИНН) </b></p>
                            <p>Проверить, засветился ли человек в качестве <br></br> руководителя, учредителя или ИП </p>
                        </div>

                        <div className="text">
                            <p><b>База ГИС ГМП </b></p>
                            <p>Проверить наличие налоговых начислений<br></br> физического лица по ИНН</p>
                        </div>


                    </div>
                </div>

                <div className="row mt-5 carousel-text">
                    <p className="mx-auto text-center">Скриншот с примером отчета, который вы получите </p>
                </div>

                <div className="mx-auto">

                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./images/sample.png"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./images/sample.png"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>

                </div>





                </div>

           
        );
    }
}

export default sources;