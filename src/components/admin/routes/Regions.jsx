import React from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/AdminContext';
import Table from '../../Table';

function States() {
    const { registeredRegions, } = useContext(AdminContext)
    return (
        <div>
            <Table
                title="Regions"
                column={[
                    { title: 'ID', field: '_id' },
                    { title: 'Region Name', field: 'RegionName' },
                    { title: 'Region Code', field: 'RegionCode' },
                ]}
                data={registeredRegions} />
        </div>
    );
}

export default States;