import React from 'react';
import Footer from '../Footer';
import MainNavBar from '../MainNavBar';
import SignUpForm from '../SignUpForm';

const SignUpPage = () => {
    return (
        <div className='page'>
            <MainNavBar />
            <SignUpForm />
            <Footer />
        </div>
    )
}

export default SignUpPage;