import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/AdminContext';
import getDarkClass from '../../../utils/getDarkClass';
import AddState from '../../AddState';
import Table from '../../Table';

function States() {
    const { registeredStatesList, } = useContext(AdminContext)
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <AddState isVisble={visible} setIsVisible={setVisible} />
            {!visible && <><div onClick={() => setVisible(true)} className={`btn_submit btn_add ${getDarkClass('dark-light')}`}>New State</div>
            <Table
                title="States"
                column={[
                    { title: 'ID', field: '_id' },
                    { title: 'State Name', field: 'StateName' },
                    { title: 'State Code', field: 'StateCode' },
                    { title: 'Region', field: 'Region' },
                ]}
                data={registeredStatesList.map(state => ({...state, Region: state.Region.RegionName }))} /></>}
        </div>
    );
}

export default States;