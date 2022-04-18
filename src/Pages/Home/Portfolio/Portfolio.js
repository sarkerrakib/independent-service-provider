import React from 'react';
import './Portfolio.css';

const Contact = () => {
    return (
        <div className='container'>
            <div className="container-fluid">

                <h1 className="font-weight-bold text-center mt-5">Portfolio</h1>

                <div className="grid">
                    <div className="grid-sizer"></div>
                    <div className="grid-item">
                        <img src="https://cdn.pixabay.com/photo/2016/03/14/14/21/bride-1255520_960_720.jpg" />
                    </div>
                    <div className="grid-item">
                        <img src="https://cdn.pixabay.com/photo/2016/11/21/15/58/wedding-1846114_960_720.jpg" />
                    </div>
                    <div className="grid-item">
                        <img src="https://cdn.pixabay.com/photo/2020/04/06/15/56/affection-5010168_960_720.jpg" />
                    </div>
                    
                    <div className="grid-item">
                        <img src="https://cdn.pixabay.com/photo/2021/08/11/17/03/bride-6538982_960_720.jpg" />
                    </div>
                    <div className="grid-item">
                        <img src="https://cdn.pixabay.com/photo/2021/08/03/21/16/bride-6520538_960_720.jpg" />
                    </div>
                    <div className="grid-item">
                        <img src="https://cdn.pixabay.com/photo/2021/10/12/17/55/bride-6704274_960_720.jpg" />
                    </div>
                    <div className="grid-item">
                        <img src="https://mdbootstrap.com/img/Photos/Others/image17.webp" />
                    </div>
                    
                    <div className="grid-item">
                        <img src="https://cdn.pixabay.com/photo/2014/09/13/04/59/couple-443600_960_720.jpg" />
                    </div>
                </div>

            </div>
        </div>
        
    );
    
};

export default Contact;