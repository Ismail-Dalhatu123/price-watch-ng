import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Nav from '../Nav';
import Header from '../Header';
import getDarkClass from '../../utils/getDarkClass';

function Home(props) {
    return (
        <BrowserRouter>
            <div className={`container bg-light-gray flex p-10 ${getDarkClass('bg-dark')}`}>
                <Nav />
                <div className="router_body">
                    <Header />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Home;