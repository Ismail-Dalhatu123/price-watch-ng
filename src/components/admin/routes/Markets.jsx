import React from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/AdminContext';
import AddMarket from '../../AddMarket';
import Table from '../../Table';

function Markets(props) {
    const { registeredMarkets } = useContext(AdminContext)
    return (
        <div>
            <AddMarket />
            <Table
                title="Markets"
                column={[
                    { title: 'ID', field: '_id' },
                    { title: 'Name', field: 'Name' },
                    { title: 'State', field: 'State' },
                    { title: 'L G A', field: 'LocalGov' },
                    { title: 'Location', field: 'Location' },
                ]}
                data={registeredMarkets.map(agent => ({ ...agent, LocalGov: agent.LocalGov.Name, State: agent.State['StateName'] }))} />
        </div>
    );
}

export default Markets;