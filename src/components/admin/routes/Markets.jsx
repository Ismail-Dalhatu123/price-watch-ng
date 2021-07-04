import React from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/AdminContext';
import Table from '../../Table';

function Markets(props) {
    const { registeredAgents, registeredStatesList, registeredMarkets, registeredLocalGovs } = useContext(AdminContext)
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

    return (
        <div>
            <Table
                title="Markets"
                column={[
                    { title: 'Name', field: 'Name' },
                    { title: 'State', field: 'State', lookup: statesObj },
                    { title: 'L G A', field: 'LocalGov', lookup: localGovNames },
                ]}
                data={registeredMarkets.map(agent => ({ ...agent, LocalGov: agent.LocalGov._id, State: agent.State['_id'] }))} />
        </div>
    );
}

export default Markets;