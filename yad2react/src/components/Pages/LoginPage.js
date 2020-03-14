import React from 'react';
import MainNavBar from '../MainNavBar';
import LoginForm from '../LoginForm';
import Footer from '../Footer';

export default () => {
    return (
        <div className='page'>
            <MainNavBar />
            <LoginForm />
            <Footer />
        </div>
    )
}