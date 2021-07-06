import React, { Component } from 'react';

class second_cases extends Component {
    render() {
        return (
            <div className="second_cases ">

                <div className="container"> 
                <h1> Часто задаваемые вопросы  </h1>

                <div className="details">
                    
                

                    <details>
                        <summary><b> Сможет ли человек узнать что я его проверяю? </b></summary>

                        <div className="details-content">
                            Прием в штат недобросовестных сотрудников несёт риски для работодателя — они могут иметь проблемы с законом, крупные долги или являться представителями конкурентов. <br></br>
                            По статистике, в 50% компаний задача проверки сотрудников ложится на подразделение HR. Как правило, все негативные факторы проверить невозможно, и проверка занимает слишком много времени. С помощью CheckPerson можно мгновенно проверить благонадёжность кандидатов и действующих сотрудников.
                        </div>
                    </details>

                    <hr></hr>


                    <details>
                        <summary>  <b> Откуда вы берете данные, это легально? </b> </summary>

                        <div className="details-content">

                        </div>
                    </details>
                    <hr></hr>

                    <details>
                        <summary> <b> На сколько свежие данные проверок?  </b></summary>

                        <div className="details-content">

                        </div>
                    </details>
                    <hr></hr>

                    <details>
                        <summary> <b>  В чем разница между простой проверкой и бизнес аккаунтом? </b></summary>

                        <div className="details-content">

                        </div>
                    </details>
                    </div>

               
                </div>

                </div>

        );
    }
}

export default second_cases;