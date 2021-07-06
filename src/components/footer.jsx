import React, { Component } from 'react';

class footer extends Component {
    render() {
        return (
            <div className="footer">

                <div className="columns">
                    <div className="col">
                        <a href="/">  <h1> Proofi </h1></a>
                        <a> Сервис онлайн-проверки физических лиц</a>

                    </div>

                    <div className="col">
                        
                        <a href=""> Для бизнеса</a>
                        <a href=""> Статьи</a>
                        <a href=""> О проекте</a>
                        <a href=""> Контакты</a>
                        
                        </div>

                        <div className="col">

                        <a href=""> Политика конфиденфиальности </a>
                        <a href=""> Пользовательское соглашение </a>
                        <a href=""> Пример отчета </a>
                        
                        </div>
                </div>

                <div className="right-right">
                    <p> Телефон </p>
                    <p> 8 (800) 5555-8-27</p>

                    <p> Техподдержка</p>
                    <p>support@proofi.ru </p>
                </div>
                
            </div>
        );
    }
}

export default footer;