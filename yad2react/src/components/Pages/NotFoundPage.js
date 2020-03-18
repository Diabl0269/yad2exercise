import React from 'react';
import PageTemplate from './PageTemplate';
import { navigate } from 'hookrouter';

export default () => {
    const NotFoundMessage = () => <div id='notFoundPage'>
        <h1>העמוד לא נמצא</h1>
        <button className='margin-bottom-l details-button' onClick={navigate('/login')}>התחבר</button>
    </div>
    return (
        <PageTemplate Component={NotFoundMessage} />
    )
}