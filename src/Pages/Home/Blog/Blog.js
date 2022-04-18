import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div>
                <h2 className='text-center m-5 blog fs-1'>BLOGS</h2>
            </div>
            <div className='container'>
                <div className="border border-secondary p-3 rounded">
                    <div className='fw-bolder fs-4 '>
                        1. Difference between authorization and authentication. <br />

                    </div>
                    <div className="fs-5">
                        Ans:- Both Authentication and Authorization region units are used in regard of information security that allows the wellbeing of a programmed information framework. Every area unit horribly pivotal points typically connected with the online as key things of its administration foundation. In any case, every one of the terms region unit horribly totally unique with by and large various thoughts. while it is actually the case that they're typically utilized in an identical setting with a comparable device, they're totally unmistakable from each other.

                        In the confirmation interaction, the personality of clients is checked for giving the admittance to the framework. While in the approval cycle, an individual's or alternately client's specialists are checked for getting to the assets. Verification is done before the approval interaction, though the approval cycle is done after the confirmation interaction.
                    </div>
                </div>


                <br />
                <br />

                {/* second question */}

                <div className="border border-secondary p-3 rounded">
                    <div className='fw-bolder fs-4'>
                        2. Why are you using firebase? What other options do you have to implement authentication? <br />
                    </div>
                    <div className="fs-5">
                        Ans:- Firebase is a backend provided by Google for both application development and web development, which requires the Internet(for placing data in firebase). The main advantage of using Firebase is no need for a physical server, it gets replaced by Firebase. The limitation is there for free of cost, beyond limitation we have to pay for Google.

                        In web development, a piece of code provided by Firebase should be added to your web application’s code. This enables the function of storing end-user data in firebase. Similarly, that stored data could be fetched for later use or further purpose. Another advantage of a firebase in the web application is no need of a separate domain like www.”yourdomainname”.com. We have to pay individually for our domain. Here, Firebase provides us our desired domain name at free of cost.
                        <br />
                        <br />
                        -There we have some other options to implement authentication & some top alternatives: <br />
                        Parse. <br />
                        Back4App. <br />
                        AWS Amplify. ... <br />
                        Kuzzle. ... <br />
                        Couchbase. ... <br />
                        NativeScript. ... <br />
                        RxDB. ... <br />
                        Flutter. <br />
                    </div>
                </div>


                <br />
                <br />

                {/* thirt question */}

                <div className="border border-secondary p-3 rounded">
                    <div className='fw-bolder fs-4'>
                        3. What other services does firebase provide other than authentication? <br />
                    </div>
                    <div className="fs-5">
                        Ams:-   Firebase gives developers many options for creating highly functional and versatile web, Android, and iOS platform applications.
                        While there are several contenders in the app development space, Firebase is always conversing with the best currently available platforms. Firebase aims to solve three main problems for developers: <br />

                        Build an app, fast
                        Release and monitor an app with confidence
                        Engage users,
                        Developers relying on this platform get access to services that they would have to develop themselves, and it enables them to lay focus on delivering robust application experiences. <br />

                        Some of the Google Firebase platform’s standout features include databases, authentication, push messages, analytics, file storage, and much more.

                        Since the services are cloud-hosted, developers can smoothly perform on-demand scaling without any hassle. Firebase is currently among the top app development platforms relied upon by developers across the globe. <br />
                        Here are the top ten benefits of using Firebase:- <br />

                        1.Free to start <br />
                        2.Development speed <br />
                        3.End-to-end app development platform <br />
                        4.Powered by Google <br />
                        5.Developers can focus on frontend development <br />
                        6.It’s serverless <br />
                        7.It offers machine learning capabilities <br />
                        8.Generates traffic to your apps <br />
                        9.Error monitoring <br />
                        10.Security <br />
                    </div>
                </div>




            </div>
        </div>

    );
};

export default Blog;