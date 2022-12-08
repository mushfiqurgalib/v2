import React from 'react'
import { useState } from 'react'; 

import Login from '../login/login';
import Register from '../register/register';

export default function Auth( { setIsAuthenticated } ) {
    const [type, setType] = useState('login');    
    const[number,setNumber]=useState('0')
    if(type === 'login')
        return <Login setType={ setType }  setIsAuthenticated={ setIsAuthenticated } />;
    else
        return <Register setType={ setType } />;
}