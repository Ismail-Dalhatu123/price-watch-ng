import React from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/AdminContext';
import AddState from '../../AddState';
import Table from '../../Table';

function States() {
    const { registeredStatesList, } = useContext(AdminContext)
    return (
        <div>
            <AddState />
            <Table
                title="States"
                column={[
                    { title: 'ID', field: '_id' },
                    { title: 'State Name', field: 'StateCode' },
                    { title: 'State Code', field: 'StateName' },
                    { title: 'Region', field: 'Region' },
                ]}
                data={registeredStatesList.map(state => ({...state, Region: state.Region.RegionName }))} />
        </div>
    );
}

export default States;