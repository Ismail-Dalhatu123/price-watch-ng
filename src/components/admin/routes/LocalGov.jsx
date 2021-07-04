import React from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/AdminContext';
import Table from '../../Table';

function LocalGovs(props) {
    const { registeredStatesList, registeredLocalGovs } = useContext(AdminContext)
    const statesObj = {}
    for (var i = 0; i < registeredStatesList.length; i++) {
        const state = registeredStatesList[i]
        statesObj[state['_id']] = state['StateName']
    }

    return (
        <div>
            <Table
                title="Local Governments"
                column={[
                    { title: 'ID', field: '_id' },
                    { title: 'Name', field: 'Name' },
                    { title: 'State', field: 'State', lookup: statesObj },
                ]}
                data={registeredLocalGovs.map(agent => ({ ...agent, State: agent.State['_id'] }))} />
        </div>
    );
}

export default LocalGovs;