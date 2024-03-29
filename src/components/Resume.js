import React from 'react';

function Resume () {
    return (
        <div className="resume">
            <div>
                <object width="100%" height="1000" border="0" data="/KathleenPehlResume.pdf#view=fitB&toolbar=0" type="application/pdf" aria-label="embedded resume">This browser does not support embedded PDFs.</object>
                {<br></br>}<a href="/KathleenPehlResume.pdf"><span className="icon"><i className="fas fa-download"></i></span>Download my resume here.</a>
            </div>
            <hr />
            <div className="skills">
                <div>
                    <h4>Front End Proficiencies</h4>
                    <ul>
                        <li>HTML 5</li>
                        <li>CSS
                            <ul>
                                <li>Bootstrap</li>
                                <li>Bulma</li>
                            </ul>
                        </li>
                        <li>JavaScript (ES5 and ES6)</li>
                        <li>jQuery</li>
                        <li>Web APIs</li>
                        <li>Handlebars templating</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Vue</li>
                    </ul>
                </div>
                <div>
                    <h4>Back End Proficiencies</h4>
                    <ul>
                        <li>JavaScript (ES5 and ES6)</li>
                        <li>PHP</li>
                        <li>Laravel</li>
                        <li>Node.js</li>
                        <li>Object Oriented Programming paradigms</li>
                        <li>Express.js</li>
                        <li>SQL
                            <ul>
                                <li>SQLite3</li>
                                <li>MySQL</li>
                                <li>Sequelize</li>
                            </ul>
                        </li>
                        <li>Model-View-Controller paradigm</li>
                        <li>MongoDB and Mongoose</li>
                        <li>Progressive Web Application paradigms
                            <ul>
                                <li>Offline functionality with service workers</li>
                                <li>Modularization and optimization of code and assets</li>
                                <li>Website auditing</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume;