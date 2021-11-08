import React from 'react';
import Navbar from './Navbar';
import { useCookies } from 'react-cookie';

function Cart() {
    const [cookies, setCookie] = useCookies(['user']); //cookies stuff
    return (
        <div>
            <Navbar />

            <h1>{cookies.userName}</h1>
        </div>
    )
}

export default Cart
