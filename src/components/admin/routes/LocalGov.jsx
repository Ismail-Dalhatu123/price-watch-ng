import React from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/AdminContext';
import AddLGA from '../../AddLGA';
import Table from '../../Table';

function LocalGovs(props) {
    const { registeredLocalGovs } = useContext(AdminContext)

    return (
        <div>
            <AddLGA />
            <Table
                title="Local Governments"
                column={[
                    { title: 'ID', field: '_id' },
                    { title: 'Name', field: 'Name' },
                    { title: 'State', field: 'State', },
                ]}
                data={registeredLocalGovs.map(agent => ({ ...agent, State: agent.State['StateName'] }))}
            />
        </div>
    );
}

export default LocalGovs;