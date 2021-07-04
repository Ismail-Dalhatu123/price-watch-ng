import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import ThemeToggler from './ThemeToggler';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import getDarkClass from '../utils/getDarkClass';


function Header(props) {
    const { user } = useContext(AppContext)
    return (
        <header className={`flex justify-space-between align-center ph-10 ${getDarkClass('bg-dark sh-lg dark-white')}`}>
            <h2 className={getDarkClass('.dark-gray-color')}>Price Watch</h2>
            <div className="user flex justify-space-between align-center">
                <ThemeToggler />
                <span className={getDarkClass('.dark-gray-color')}>{user.FirstName} {user.LastName}</span>
                <div className="user_icon flex justify-center align-center">
                    <PersonRoundedIcon />
                </div>
            </div>
        </header>
    );
}

export default Header;