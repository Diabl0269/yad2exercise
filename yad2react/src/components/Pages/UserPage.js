import React from 'react';
import PageTemplate from './PageTemplate';
import UserForm from '../Forms/UserForm/UserForm';

const UserPage = () => {
    return (
        <PageTemplate Component={UserForm} />
    )
}

export default UserPage;