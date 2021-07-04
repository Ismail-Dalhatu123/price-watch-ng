import React, { useEffect, useState } from 'react';
import { Pie } from "react-chartjs-2";
import { GET } from '../../api/methods';
import getDarkClass from '../../utils/getDarkClass';
import Loader from '../Loader';



function Chart({ url, className , darkModeClassName = "dark-accent", removeAt, title, backgroundColor, borderColor, borderWidth = 1, ChartType = Pie }) {
    const [data, setData] = useState(null)
    const [items, setItems] = useState([])  
    const [loading, setLoading] = useState(false)
    const getData = async () => {
        setLoading(true)
        const res = await GET(url)
        if (res.ok) {
            const items = res.response.data
            const labels = Object.keys(items).filter(i => i !== removeAt)
            const datasets = [{
                lable: `# of ${title}`,
                data: labels.map(r => items[r]),
                backgroundColor,
                borderColor,
                borderWidth
            }]
            setData({ labels, datasets })
            setItems(items)
        }
        setLoading(false)
    }
    
    useEffect(() => {
        getData()
    }, [])
    
    if(!url) return null
    
    return (
        <div className={`${className + ' stat_group'} chart_cont sh flex flex-column justify-center align-center ${getDarkClass(darkModeClassName + ' sh-lg')}`}>
            <Loader loading={loading} />
            { data !== null ? <ChartType options={{ maintainAspectRatio: false }} width={100} height={100} style={{ width: 100, height: 100 }} data={data} /> : '' }
        <h3 style={{marginTop: 10}} className={`text-center mb-20 ${getDarkClass('dark-white')}`}>{title}: {items[removeAt]}</h3>
      </div>
    );
}

export default Chart;