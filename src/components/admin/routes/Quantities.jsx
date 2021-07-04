import React from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/AdminContext';
import Table from '../../Table';

function Quantities(props) {
    const { commoditiesList, quantities } = useContext(AdminContext)
    const commObj = {}
    for (var i = 0; i < commoditiesList.length; i++) {
        const comm = commoditiesList[i]
        commObj[comm['_id']] = comm['CommodityName']
    }

    return (
        <div>
            <Table
                title="Quantities"
                column={[
                    { title: 'ID', field: '_id' },
                    { title: 'Quantity', field: 'Quantity' },
                    { title: 'Commodity', field: 'Commodity', lookup: commObj },
                ]}
                data={quantities.map(agent => ({ ...agent, Commodity: agent.Commodity['_id'] }))} />
        </div>
    );
}

export default Quantities;