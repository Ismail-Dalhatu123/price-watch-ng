import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import AdminContext from '../contexts/AdminContext';
import getDarkClass from '../utils/getDarkClass';
import LineChart from './charts/Line';

function Compare(props) {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [selectedRegion, setSelectedRegion] = useState('')
    const [selectedState, setSelectedState] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedMarket, setSelectedMarket] = useState('')
    const [selectedCommodity, setSelectedCommodity] = useState('')
    const [selectedQuantity, setSelectedQuantity] = useState('')
    const {
        registeredRegions,
        registeredStatesList,
        registeredMarkets,
        categories,
        quantities,
        commoditiesList
    } = useContext(AdminContext)
    return (
        <div>
            <div className="options">
                <div className="dates">
                    <input className={`date_input ${getDarkClass('dark_input_date')}`} onChange={val => setStartDate(val.target.value)} value={startDate} type="date" placeholder="State Date" />
                    <br />
                    <input className={`date_input ${getDarkClass('dark_input_date')}`} onChange={val => setEndDate(val.target.value)} value={endDate} type="date" placeholder="End Date" />
                </div>
                <div className="dates">
                    <select onChange={(e) => e.target.value ? setSelectedRegion(e.target.value) : {}} className={`date_input ${getDarkClass('dark_input_date')}`}>
                        <option value="">Select Region</option>
                        {registeredRegions.map(reg => <option key={reg._id} value={reg._id}>{reg.RegionName}</option>)}
                    </select>
                    <br />
                    <select onChange={(e) => e.target.value ? setSelectedState(e.target.value) : {}} className={`date_input ${getDarkClass('dark_input_date')}`}>
                        <option value="">Select State</option>
                        {registeredStatesList.map(st => st.Region._id === selectedRegion ? <option value={st._id} key={st._id}>{st.StateName}</option> : null)}
                    </select>
                </div>
                <div className="dates">
                    <select onChange={(e) => e.target.value ? setSelectedMarket(e.target.value) : {}} className={`date_input ${getDarkClass('dark_input_date')}`}>
                        <option value="">Select Market</option>
                        {registeredMarkets.map(mkt => mkt.State._id === selectedState ? <option key={mkt._id} value={mkt._id}>{mkt.Name}</option> : null)}
                    </select>
                    <br />
                    <select onChange={(e) => e.target.value ? setSelectedCategory(e.target.value) : {}} className={`date_input ${getDarkClass('dark_input_date')}`}>
                        <option value="">Select Category</option>
                        {categories.map(reg => <option key={reg._id} value={reg._id}>{reg.CategoryName}</option>)}
                    </select>                   
                </div>
                <div className="dates">
                    <select onChange={(e) => e.target.value ? setSelectedCommodity(e.target.value) : {}} className={`date_input ${getDarkClass('dark_input_date')}`}>
                        <option value="">Select Commodity</option>
                        {commoditiesList.map(com => <option value={com._id} key={com._id}>{com.CommodityName}</option>)}
                    </select>
                    <br />
                    <select onChange={(e) => e.target.value ? setSelectedQuantity(e.target.value) : {}} className={`date_input ${getDarkClass('dark_input_date')}`}>
                        <option value="">Select Quantity</option>
                        {quantities.map(qnt => <option key={qnt._id} value={qnt._id}>{qnt.Quantity}</option>)}
                    </select>
                    <br />
                </div>
                <div className="dates">
                    <div className="btn flex justify-center align-center">Add</div>
                    <br />
                    <div className="btn flex justify-center align-center">Plot</div>
                </div>
            </div>
            <div className="plotter">
                <LineChart style={window.innerWidth > 700 ? {width: window.innerWidth * 0.8, height: window.innerHeight - 350, marginLeft: 'auto', marginRight: 'auto', marginBottom: 50} : {}} />
            </div>
        </div>
    );
}

export default Compare;