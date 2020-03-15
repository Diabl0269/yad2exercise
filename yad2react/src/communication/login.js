import axios from 'axios';

export default async (loginObj) => {
    const res = await axios.post('/users/login', loginObj);
    if(!res.toekn)
        return 
    return res.toekn;
}