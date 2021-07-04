import React from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/AdminContext';
import Table from '../../Table';
import AddAgent from '../../AddAgent';
import { useState } from 'react';
import getDarkClass from '../../../utils/getDarkClass';

function Agents(props) {
    const { registeredAgents, registeredStatesList, registeredMarkets, registeredRegions, registeredLocalGovs } = useContext(AdminContext)
    const [isVisble, setIsVisible] = useState(false)
    const statesObj = {}
    for (var i = 0; i < registeredStatesList.length; i++) {
        const state = registeredStatesList[i]
        statesObj[state['_id']] = state['StateName']
    }
    const localGovNames = {}
    for (var i = 0; i < registeredLocalGovs.length; i++) {
        const lga = registeredLocalGovs[i]
        localGovNames[lga['_id']] = lga['Name']
    }
    const marketNames = {}
    for (var i = 0; i < registeredMarkets.length; i++) {
        const mkt = registeredMarkets[i]
        marketNames[mkt['_id']] = mkt['Name']
    }
    return (
        <div>
            <AddAgent isVisivle={isVisble} setIsVisible={setIsVisible} />
            {!isVisble && <><div onClick={() => setIsVisible(true)} className={`btn_submit btn_add ${getDarkClass('dark-light')}`}>Add Agent</div>
            <Table
                    title="Agents"
                    viewItem={() => {}}
                column={[
                    { title: 'ID', field: '_id' },
                    { title: 'First Name', field: 'FirstName' },
                    { title: 'Middle Name', field: 'MiddleName' },
                    { title: 'Last Name', field: 'LastName' },
                    { title: 'Email', field: 'Email' },
                    { title: 'Phone Number', field: 'PhoneNumber' },
                    { title: 'State', field: 'State', lookup: statesObj },
                    { title: 'L G A', field: 'LocalGov', lookup: localGovNames },
                    { title: 'Market', field: 'Market', lookup: marketNames }
                ]}
                data={registeredAgents.map(agent => ({ ...agent, Market : agent.Market._id, LocalGov: agent.LocalGov._id, State: agent.State['_id'] }))} /></>}
        </div>
    );
}

export default Agents;