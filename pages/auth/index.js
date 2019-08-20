import React from 'react';
import User from '../../components/User';

const authIndexPage = (props) => (
    <div>
        <h1>The Auth Index Page of {props.appName}</h1>
        <User name="Bruce" nick="Batman"/>
    </div>
);

authIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({appName: 'Hello World - Auth'})
        }, 1000);
    });
    return promise;
};

export default authIndexPage;