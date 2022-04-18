import React from 'react';
import me from '../../images/me.png';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="about">
                <div className="container">
                    <div className='d-flex justify-content-between'>
                        <div className='contentAbout'>
                            <h2 className=' mt-5'>Md. Rakibul Islam</h2>
                            <br />
                            <p>Living without a goal is like shooting an arrow without actually having any clue about the aim or target. An individual can have all the wealth as well as potential in the world but without focus and goal, they are simply leading a non-existent life where there is no zest for achieving new things. So, at this moment my future goal is to become a web developer. Already I know a little bit of PHP and now i am learning javascript. I hope that within this current year i will be a junior web developer and in near future, i will learn another programming language also so that I can put my steps in different fields like app development.</p>
                        </div>
                        <div>
                            <img style={{ width: '' }} src={me} alt="" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">
                
            </div>
        </div>


    );
};

export default About;