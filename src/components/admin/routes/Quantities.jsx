import React from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/AdminContext';
import AddQuantity from '../../AddQuantity';
import Table from '../../Table';

function Quantities(props) {
    const { quantities } = useContext(AdminContext)
    return (
        <div>
            <AddQuantity />
            <Table
                title="Quantities"
                column={[
                    { title: 'ID', field: '_id' },
                    { title: 'Quantity', field: 'Quantity' },
                    { title: 'Commodity', field: 'Commodity' },
                ]}
                data={quantities.map(agent => ({ ...agent, Commodity: agent.Commodity['CommodityName'] }))} />
        </div>
    );
}

export default Quantities;