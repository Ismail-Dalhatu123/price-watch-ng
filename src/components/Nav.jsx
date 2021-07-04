import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import getDarkClass from '../utils/getDarkClass';
import url from '../api/urls';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ApartmentRoundedIcon from '@material-ui/icons/ApartmentRounded';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import FormatListNumberedRoundedIcon from '@material-ui/icons/FormatListNumberedRounded';
import HomeWorkRoundedIcon from '@material-ui/icons/HomeWorkRounded';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import KitchenRoundedIcon from '@material-ui/icons/KitchenRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';


function Nav(props) {
    const [isCollaps, setIsCollaps] = useState(true)
    const [ac,setAc] = useState("")
    const mathc = useRouteMatch()
    useEffect(() => {
        setAc(document.location.href)
    }, [mathc])
    return (
        <nav className={`${isCollaps ? 'collaps': ''} ${getDarkClass('dark-accent nav-dark')}`}>
            <Link to="/" className={`nav_link ${getDarkClass('dark-accent-light')} ${!ac.includes(url.agents.base) && !ac.includes(url.market) && !ac.includes(url.categories) && !ac.includes(url.quantities) && !ac.includes(url.commodities) && !ac.includes(url.localGov) && !ac.includes(url.region) && !ac.includes(url.states) ? "active" : ""}`}>
                <div className="nav_icon flex flex-center align-center justify-center">
                    <DashboardRoundedIcon />
                </div>
                <div className="text">
                    <span>Dashboard</span>
                </div>
            </Link>
            <Link to={url.agents.base} className={`nav_link ${getDarkClass('dark-accent-light')} ${ac.includes(url.agents.base) ? "active" : ""}`}>
                <div className="nav_icon flex flex-center align-center justify-center">
                    <AccountCircleRoundedIcon />
                </div>
                <div className="text">
                    <span>Agents</span>
                </div>
            </Link>
            <Link to={url.states} className={`nav_link ${getDarkClass('dark-accent-light')} ${ac.includes(url.states) ? "active" : ""}`}>
                <div className="nav_icon flex flex-center align-center justify-center">
                    <ApartmentRoundedIcon />
                </div>
                <div className="text">
                    <span>States</span>
                </div>
            </Link>
            <Link to={url.region} className={`nav_link ${getDarkClass('dark-accent-light')} ${ac.includes(url.region) ? "active" : ""}`}>
                <div className="nav_icon flex flex-center align-center justify-center">
                    <LanguageRoundedIcon />
                </div>
                <div className="text">
                    <span>Regions</span>
                </div>
            </Link>
            <Link to={url.market} className={`nav_link ${getDarkClass('dark-accent-light')} ${ac.includes(url.market) ? "active" : ""}`}>
                <div className="nav_icon flex flex-center align-center justify-center">
                    <RoomRoundedIcon />
                </div>
                <div className="text">
                    <span>Markets</span>
                </div>
            </Link>
            <Link to={url.commodities} className={`nav_link ${getDarkClass('dark-accent-light')} ${ac.includes(url.commodities) ? "active" : ""}`}>
                <div className="nav_icon flex flex-center align-center justify-center">
                    <KitchenRoundedIcon />
                </div>
                <div className="text">
                    <span>Commodities</span>
                </div>
            </Link>
            <Link to={url.categories} className={`nav_link ${getDarkClass('dark-accent-light')} ${ac.includes(url.categories) ? "active" : ""}`}>
                <div className="nav_icon flex flex-center align-center justify-center">
                    <CategoryRoundedIcon />
                </div>
                <div className="text">
                    <span>Categories</span>
                </div>
            </Link>
            <Link to={url.quantities} className={`nav_link ${getDarkClass('dark-accent-light')} ${ac.includes(url.quantities) ? "active" : ""}`}>
                <div className="nav_icon flex flex-center align-center justify-center">
                    <FormatListNumberedRoundedIcon />
                </div>
                <div className="text">
                    <span>Quantities</span>
                </div>
            </Link>
            <Link to={url.localGov} className={`nav_link ${getDarkClass('dark-accent-light')} ${ac.includes(url.localGov) ? "active" : ""}`}>
                <div className="nav_icon flex flex-center align-center justify-center">
                    <HomeWorkRoundedIcon />
                </div>
                <div className="text">
                    <span>LGA</span>
                </div>
            </Link>
            <div className={`nav_link ${getDarkClass('dark-accent-light')}`} onClick={() => setIsCollaps(!isCollaps)} >
                <div className="nav_icon flex flex-center align-center justify-center">
                    { isCollaps ? <ChevronRightRoundedIcon /> : <ChevronLeftRoundedIcon /> }
                </div>
                <div className="text">
                    <span>Collaps</span>
                </div>
            </div>
            <div onClick={() => {
                localStorage.removeItem('PWtoken')
                window.location = '/'
            }} className={`nav_link ${getDarkClass('dark-accent-light')}`}>
                <div className="nav_icon flex flex-center align-center justify-center">
                    <ExitToAppRoundedIcon />
                </div>
                <div className="text">
                    <span>Log out</span>
                </div>
            </div>
        </nav>
    );
}

export default Nav;