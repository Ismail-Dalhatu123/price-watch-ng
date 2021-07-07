import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import AdminContext from '../contexts/AdminContext';
import getDarkClass from '../utils/getDarkClass';
import LineChart from './charts/Line';
import CustomSelect from './CustomSelect';

function Compare(props) {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [selectedRegion, setSelectedRegion] = useState('')
    const [selectedState, setSelectedState] = useState('')
    const [selectedLGA, setSelectedLGA] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedMarket, setSelectedMarket] = useState('')
    const [selectedCommodity, setSelectedCommodity] = useState('')
    const [selectedQuantity, setSelectedQuantity] = useState('')
    const [activeMarkets, setActiveMarktes] = useState([])
    const [selectedMarkets, setSelectedMarkets] = useState([])
    const [activeQuantities, setActiveQuantities] = useState([])
    const [selectedQuantities, setSelectedQuantities] = useState([])
    const {
        registeredRegions,
        registeredStatesList,
        registeredMarkets,
        categories,
        quantities,
        commoditiesList,
        registeredLocalGovs
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
                    <CustomSelect
                        className={`compare_op ${getDarkClass('compare_op_dark')}`}
                        onSelect={val => setSelectedRegion(val)}
                        options={registeredRegions.map(op => ({ value: op._id, label: op.RegionName }))}
                        title="Select Region" />
                    {/* <select onChange={(e) => e.target.value ? setSelectedRegion(e.target.value) : {}} className={`date_input ${getDarkClass('dark_input_date')}`}>
                        <option value="">Select Region</option>
                        {registeredRegions.map(reg => <option key={reg._id} value={reg._id}>{reg.RegionName}</option>)}
                    </select> */}
                    <br />
                    <CustomSelect
                        className={`compare_op ${getDarkClass('compare_op_dark')}`}
                        onSelect={val => setSelectedState(val)}
                        options={registeredStatesList.filter(s => s.Region._id === selectedRegion).map(op => ({ value: op._id, label: op.StateName }))}
                        title="Select State" />
                    {/* <select onChange={(e) => e.target.value ? setSelectedState(e.target.value) : {}} className={`date_input ${getDarkClass('dark_input_date')}`}>
                        <option value="">Select State</option>
                        {registeredStatesList.map(st => st.Region._id === selectedRegion ? <option value={st._id} key={st._id}>{st.StateName}</option> : null)}
                    </select> */}
                </div>
                <div className="dates">
                    <CustomSelect
                        className={`compare_op ${getDarkClass('compare_op_dark')}`}
                        onSelect={val => setSelectedLGA(val)}
                        options={registeredLocalGovs.filter(s => s.State._id === selectedState).map(op => ({ value: op._id, label: op.Name }))}
                        title="Select L G A" />
                    <br />
                    <CustomSelect
                        className={`compare_op ${getDarkClass('compare_op_dark')}`}
                        onSelect={val => {
                            setSelectedMarket(val)
                            setActiveMarktes([val, ...activeMarkets])
                            setSelectedMarkets([val, ...activeMarkets])
                        }}
                        options={registeredMarkets.filter(s => s.LocalGov._id === selectedLGA).map(op => ({ value: op._id, label: op.Name }))}
                        title="Select Market" />
                    {/* <select onChange={(e) => e.target.value ? setSelectedMarket(e.target.value) : {}} className={`date_input ${getDarkClass('dark_input_date')}`}>
                        <option value="">Select Market</option>
                        {registeredMarkets.map(mkt => mkt.State._id === selectedState ? <option key={mkt._id} value={mkt._id}>{mkt.Name}</option> : null)}
                    </select> */}
                    {/* <select onChange={(e) => e.target.value ? setSelectedCategory(e.target.value) : {}} className={`date_input ${getDarkClass('dark_input_date')}`}>
                        <option value="">Select Category</option>
                        {categories.map(reg => <option key={reg._id} value={reg._id}>{reg.CategoryName}</option>)}
                    </select>                    */}
                </div>
                <div className="dates">
                    <CustomSelect
                        className={`compare_op ${getDarkClass('compare_op_dark')}`}
                        onSelect={val => setSelectedCategory(val)}
                        options={selectedMarket ? categories.map(op => ({ value: op._id, label: op.CategoryName })) : []}
                        title="Select Category" />
                    <br />
                    <CustomSelect
                        className={`compare_op ${getDarkClass('compare_op_dark')}`}
                        onSelect={val => setSelectedCommodity(val)}
                        options={selectedCategory ? commoditiesList.filter(cm => cm.Category._id === selectedCategory).map(op => ({ value: op._id, label: op.CommodityName })) : []}
                        title="Select Commodity" />
                    {/* <select onChange={(e) => e.target.value ? setSelectedCommodity(e.target.value) : {}} className={`date_input ${getDarkClass('dark_input_date')}`}>
                        <option value="">Select Commodity</option>
                        {commoditiesList.map(com => <option value={com._id} key={com._id}>{com.CommodityName}</option>)}
                    </select> */}
                    {/* <select onChange={(e) => e.target.value ? setSelectedQuantity(e.target.value) : {}} className={`date_input ${getDarkClass('dark_input_date')}`}>
                        <option value="">Select Quantity</option>
                        {quantities.map(qnt => <option key={qnt._id} value={qnt._id}>{qnt.Quantity}</option>)}
                    </select> */}
                </div>
                <div className="dates">
                    <CustomSelect
                        className={`compare_op ${getDarkClass('compare_op_dark')}`}
                        onSelect={val => {
                            setSelectedQuantity(val)
                            setActiveQuantities([val, ...activeQuantities])
                            setSelectedQuantities([val, ...selectedQuantities])
                        }}
                        options={selectedCommodity ? quantities.filter(cm => cm.Commodity._id === selectedCommodity).map(op => ({ value: op._id, label: op.Quantity })) : []}
                        title="Select Quantity" />
                    <br />
                    <div className="flex">
                        <div className="btn flex justify-center align-center">Plot</div>
                    </div>
                </div>
                <div className="selected_quantities">
                    <div className="selected_markets">
                        {selectedMarkets.map(mkt => (
                            <div className="mak flex">
                                <div className="check flex justify-center align-center">
                                    <input onChange={() => {
                                        if (activeMarkets.includes(mkt)) {
                                            setActiveMarktes(activeMarkets.filter(m => m !== mkt))
                                            return
                                        }
                                        setActiveMarktes([mkt, ...activeMarkets])
                                    }} checked={activeMarkets.includes(mkt)} type="checkbox" />
                                </div>
                                <p>
                                    {registeredMarkets.find(m => m._id === mkt).Name} | {registeredMarkets.find(m => m._id === mkt).LocalGov.Name} | {registeredMarkets.find(m => m._id === mkt).State.StateName}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="selected_quant">
                        {selectedQuantities.map(qnt => (
                            <div className="mak flex">
                                <div className="check flex justify-center align-center">
                                    <input onChange={() => {
                                        if (activeQuantities.includes(qnt)) {
                                            setActiveQuantities(activeQuantities.filter(m => m !== qnt))
                                            return
                                        }
                                        setActiveQuantities([qnt, ...activeQuantities])
                                    }} checked={activeQuantities.includes(qnt)} type="checkbox" />
                                </div>
                                <p>
                                    {quantities.find(m => m._id === qnt).Quantity} | {quantities.find(m => m._id === qnt).Commodity.CommodityName}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="plotter">
                <LineChart style={window.innerWidth > 700 ? {width: window.innerWidth * 0.8, height: window.innerHeight - 350, marginLeft: 'auto', marginRight: 'auto', marginBottom: 50} : {}} />
            </div>
        </div>
    );
}

export default Compare;