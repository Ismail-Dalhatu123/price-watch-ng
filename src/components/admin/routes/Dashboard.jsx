import React, { useContext } from 'react';
import Chart from '../../charts/Chart';
import url from '../../../api/urls';
import AppContext from '../../../contexts/AppContext';
import { Doughnut, Line } from "react-chartjs-2";
import DisplayText from '../../DisplayText';
import AdminContext from '../../../contexts/AdminContext';
// import Map from '../../Map'
// import getDarkClass from '../../../utils/getDarkClass';
// import Places from '../../Places'
// import { Button } from '@material-ui/core'
// import MaterialTable from '../components/MateriaTable'

// const darkModeColors = ['#005a76','#626ee3','#02203c']
// const lightModeColors = ['#ff9933','#990099','#ffff00']
import Table from '../../Table';
import LineChart from '../../charts/Line';
import getDarkClass from '../../../utils/getDarkClass';

// function SimpleAction() {
//   return (
//     <MaterialTable
//       title="Simple Action Preview"
//       columns={[
//         { title: 'Name', field: 'name' },
//         { title: 'Surname', field: 'surname' },
//         { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
//         {
//           title: 'Birth Place',
//           field: 'birthCity',
//           lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
//         },
//       ]}
//       data={[
//         { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//         { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
//       ]}        
//       actions={[
//         {
//           icon: 'save',
//           tooltip: 'Save User',
//           onClick: (event, rowData) => alert("You saved " + rowData.name)
//         }
//       ]}
//     />
//   )
// }

const generateArray = () => {
    const opt = []
    for (let i = 0; i <= 12;  i++) {
        opt.push(Math.round(Math.random() * 10000))
    }
    return opt
}

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
    const { theme } = useContext(AppContext)
    const { registeredAgents, registeredStatesList, registeredMarkets, registeredRegions, registeredLocalGovs, commoditiesList } = useContext(AdminContext)
    
    return (
        <div>
            <div className="carts">
            <Chart
                ChartType={Doughnut}
                title="Submissions"
                removeAt="allSubmissions"
                    url={url.submissionsStat}
                    className="subStat"
                backgroundColor={theme === 'light' ? lightModeColors : darkModeColors}
                borderColor={theme === 'light' ? lighBordertModeColors : darkBorderModeColors}
                />
                <div className={`stat_group sh sub_summary ${getDarkClass('dark-accent')}`}>
                    <LineChart />
                </div>
                <div className="list">
                    <DisplayText link={url.agents.base} value={registeredAgents.length} title="Registered Agents" />
                    <DisplayText link={url.states} value={registeredStatesList.length} title="States" />
                    <DisplayText link={url.localGov} value={registeredLocalGovs.length} title="Local Governments" />
                    <DisplayText link={url.market} value={registeredMarkets.length} title="Markets" />
                    <DisplayText link={url.region} value={registeredRegions.length} title="Regions" />
                    <DisplayText link={url.commodities} value={commoditiesList.length} title="Commodities" />
                </div>
            </div>
            <div className={`compare flex jutify-center align-center start_group sh ${getDarkClass('dark-accent')}`}>
                <LineChart
                    style={{flex: 1,}}
                    data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                        datasets: [
                            {
                                label: 'Price of iPhone 7 Market 1',
                                data: generateArray(),
                                fill: true,
                                borderColor: 'rgb(153, 153, 0)',
                                backgroundColor: 'rgba(153, 153, 0, 0.2)',
                                borderWidth: 1
                            },
                        ],
                    }} />
            </div>
        </div>
    );
}

export default Dashboard;