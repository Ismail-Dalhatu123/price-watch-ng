import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import AdminContext from '../contexts/AdminContext';
import getDarkClass from '../utils/getDarkClass';
import LineChart from './charts/Line';
import CustomSelect from './CustomSelect';
import Loader from './Loader';
import { months as monthsInYear } from '../utils/days'

const generateArray = () => {
    const opt = []
    for (let i = 0; i <= 12;  i++) {
        opt.push(Math.round(Math.random() * 1000))
    }
    return opt
}
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',1)';
}
    
function dateRange(startDate, endDate) {
    var start      = startDate.split('-');
    var end        = endDate.split('-');
    var startYear  = parseInt(start[0]);
    var endYear    = parseInt(end[0]);
    var dates      = [];

    for(var i = startYear; i <= endYear; i++) {
        var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
        var startMon = i === startYear ? parseInt(start[1])-1 : 0;
        for(var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j+1) {
        var month = j+1;
        var displayMonth = month < 10 ? '0'+month : month;
        dates.push([i, displayMonth, '01'].join('-'));
        }
    }
    return dates;
}
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function Compare(props) {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
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
    const [plotData, setPlotData] = useState({ labels: [], datasets: [] })
    const [monthsList, setMonthsList] = useState([])
    const [loading, setLoading] = useState(false)
    const {
        registeredRegions,
        registeredStatesList,
        registeredMarkets,
        categories,
        quantities,
        commoditiesList,
        registeredLocalGovs
    } = useContext(AdminContext)
    const plot = () => {
        const months = dateRange(startDate, endDate)
        const labels = months.map(d => ({label:`${monthsInYear[new Date(d).getMonth()]} ${new Date(d).getFullYear()}`, value: d}))
        // const datasets = labels.map(l => {
        //     return {
        //         label: 'Price of Rice at Market 1',
        //         data: generateArray(),
        //         fill: false,
        //         backgroundColor: 'rgba(0, 0, 255, 0.2)',
        //         borderColor: 'rgba(0, 0, 255, 0.2)',
        //     }
        // })
        //for market generate obj -> data get average price for each month
        // const datasets = [{
        //     label: 'Price of Rice at Market 3',
        //     data: months.map(m => randomIntFromInterval(10000, 13000)),
        //     fill: false,
        //     backgroundColor: random_rgba(),
        //     borderColor: random_rgba(),
        // }]
        const datasets = []
        for (let i = 0; i < activeMarkets.length; i++) {
            const mkt = registeredMarkets.find(m => m._id === activeMarkets[i]);
            for (let j = 0; j < activeQuantities.length; j++) {
                const qnt = quantities.find(q => q._id === activeQuantities[j]);
                const data = []
                for (let k = 0; k < labels.length; k++) {
                    const m = labels[k];
                    data.push(randomIntFromInterval(10000, 13000))
                }
                datasets.push({
                    label: `Price of ${qnt.Quantity} at ${mkt.Name} | ${mkt.LocalGov.Name} | ${mkt.State.StateName}`,
                    data,
                    fill: false,
                    backgroundColor: random_rgba(),
                    borderColor: random_rgba(),
                })
            }
        }
        setMonthsList(labels)
        setPlotData({datasets, labels: labels.map(m => m.label)})
    }
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
                        options={registeredMarkets.filter(s => s.LocalGov._id === selectedLGA && !selectedMarkets.includes(s._id)).map(op => ({ value: op._id, label: op.Name }))}
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
                        options={selectedCommodity ? quantities.filter(cm => cm.Commodity._id === selectedCommodity && !selectedQuantities.includes(cm._id)).map(op => ({ value: op._id, label: op.Quantity })) : []}
                        title="Select Quantity" />
                    <br />
                    <div className="flex">
                        <div onClick={plot} className="btn flex justify-center align-center">
                            {loading ? <Loader loading={loading} /> : 'Plot'}
                        </div>
                    </div>
                </div>
                <div className={`selected_quantities ${getDarkClass('bg-dark bg-border-dark')}`}>
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
                {/* <CustomSelect onSelect={(val) => console.log(val)} title="Select Month" options={monthsList} /> */}
                <LineChart data={plotData} style={window.innerWidth > 700 ? {width: window.innerWidth * 0.8, height: window.innerHeight - 350, marginLeft: 'auto', marginRight: 'auto', marginBottom: 50} : {}} />
            </div>
        </div>
    );
}

export default Compare;


// {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//   datasets: [
//     {
//       label: 'Price of Rice at Market',
//       data: generateArray(),
//       fill: false,
//       backgroundColor: 'rgba(255, 0, 0, 0.2)',
//       borderColor: 'rgba(255, 0, 0, 0.2)',
//     },
//     {
//       label: 'Price of Rice at Market 2',
//       data: generateArray(),
//       fill: false,
//       backgroundColor: 'rgba(0, 255, 0, 0.2)',
//       borderColor: 'rgba(0, 255, 0, 0.2)',
//     },
//     {
//       label: 'Price of Rice at Market 3',
//       data: generateArray(),
//       fill: false,
//       backgroundColor: 'rgba(0, 0, 255, 0.2)',
//       borderColor: 'rgba(0, 0, 255, 0.2)',
//     },
//   ],
// }