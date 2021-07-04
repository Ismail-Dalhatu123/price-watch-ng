import React from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/AdminContext';
import Table from '../../Table';

function Commodities(props) {
    const { commoditiesList } = useContext(AdminContext)
    return (
        <div>
            <Table
                title="Commodities"
                column={[
                    { title: 'ID', field: '_id' },
                    { title: 'Name', field: 'CommodityName' },
                ]}
                data={commoditiesList} />
        </div>
    );
}

export default Commodities;