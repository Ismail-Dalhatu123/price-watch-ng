import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import getDarkClass from '../utils/getDarkClass';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import { useState } from 'react';

function Greetings(props) {
    const { user } = useContext(AppContext)
    const [isVisible, setIsVisible] = useState(true)
    if(!isVisible) return null
    return (
        <div className={`greetings sh ${getDarkClass('dark-light dark-white')}`}>
            <h2>Hey, {user.FirstName} {user.MiddleName} {user.LastName}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab totam perferendis rem officia quia sed accusamus atque necessitatibus expedita ea velit at illo iste, optio eum repellat ex dicta?</p>
            <div onClick={() => setIsVisible(false)} className="icon">
                <HighlightOffRoundedIcon />
            </div>
        </div>
    );
}

export default Greetings;