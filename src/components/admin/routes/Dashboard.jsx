import React, { useContext } from 'react';
import Chart from '../../charts/Chart';
import url from '../../../api/urls';
import AppContext from '../../../contexts/AppContext';
import { Doughnut } from "react-chartjs-2";
// import Map from '../../Map'
// import getDarkClass from '../../../utils/getDarkClass';
// import Places from '../../Places'
// import { Button } from '@material-ui/core'
// import MaterialTable from '../components/MateriaTable'

// const darkModeColors = ['#005a76','#626ee3','#02203c']
// const lightModeColors = ['#ff9933','#990099','#ffff00']

const lightModeColors = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
]
const darkModeColors = lightModeColors
const lighBordertModeColors = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
]
const darkBorderModeColors = lighBordertModeColors

function Dashboard(props) {
    const {theme} = useContext(AppContext)
    return (
        <div>
            <h2>Dashboard </h2>
            <div className="carts">
            <Chart
                ChartType={Doughnut}
                title="Submissions"
                removeAt="allSubmissions"
                url={url.submissionsStat}
                backgroundColor={theme === 'light' ? lightModeColors : darkModeColors}
                borderColor={theme === 'light' ? lighBordertModeColors : darkBorderModeColors}
            />
            <Chart
                ChartType={Doughnut}
                title="Submissions"
                removeAt="allSubmissions"
                url={url.submissionsStat}
                backgroundColor={theme === 'light' ? lightModeColors : darkModeColors}
                borderColor={theme === 'light' ? lighBordertModeColors : darkBorderModeColors}
            />
            <Chart
                ChartType={Doughnut}
                title="Submissions"
                removeAt="allSubmissions"
                url={url.submissionsStat}
                backgroundColor={theme === 'light' ? lightModeColors : darkModeColors}
                borderColor={theme === 'light' ? lighBordertModeColors : darkBorderModeColors}
            />
            <Chart
                ChartType={Doughnut}
                title="Submissions"
                removeAt="allSubmissions"
                url={url.submissionsStat}
                backgroundColor={theme === 'light' ? lightModeColors : darkModeColors}
                borderColor={theme === 'light' ? lighBordertModeColors : darkBorderModeColors}
            />
            <Chart
                ChartType={Doughnut}
                title="Submissions"
                removeAt="allSubmissions"
                url={url.submissionsStat}
                backgroundColor={theme === 'light' ? lightModeColors : darkModeColors}
                borderColor={theme === 'light' ? lighBordertModeColors : darkBorderModeColors}
            />
            <Chart
                ChartType={Doughnut}
                title="Submissions"
                removeAt="allSubmissions"
                url={url.submissionsStat}
                backgroundColor={theme === 'light' ? lightModeColors : darkModeColors}
                borderColor={theme === 'light' ? lighBordertModeColors : darkBorderModeColors}
            />
            </div>
        </div>
    );
}

export default Dashboard;