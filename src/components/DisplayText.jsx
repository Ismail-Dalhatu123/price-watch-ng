import React from 'react';
import { Link } from 'react-router-dom';
import getDarkClass from '../utils/getDarkClass';

function DisplayText({ title, value, link }) {
    return (
        <Link to={link} className={`bg-white flex-column display_text sh flex justify-center align-center ${getDarkClass('dark-accent')}`}>
            <h2>{value}</h2>
            {title}
        </Link>
    );
}

export default DisplayText;