import React from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/AdminContext';
import Table from '../../Table';

function States() {
    const { registeredStatesList, } = useContext(AdminContext)
    return (
        <div>
            <Table
                title="States"
                column={[
                    { title: 'State Name', field: 'StateCode' },
                    { title: 'State Code', field: 'StateName' },
                ]}
                data={registeredStatesList} />
        </div>
    );
}

export default States;