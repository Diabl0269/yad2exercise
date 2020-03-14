import { useState } from 'react';

export default () => {
    return {
        email: useState(''),
        password: useState('')
    }
}