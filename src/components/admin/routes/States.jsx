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
    const [update, setUpdate] = useState(false)
    return (
        <div>
            <AddState update={update} isVisble={visible} setIsVisible={() => {
                setVisible(false)
                setUpdate(false)
            }} />
            {!visible && <><div onClick={() => setVisible(true)} className={`btn_submit btn_add ${getDarkClass('dark-light')}`}>New State</div>
                <Table
                    editItem={(a, b) => {
                        setUpdate({ stateName: b.StateName, _id: b._id, stateCode: b.StateCode, region: b.Region._id })
                        setVisible(true)
                    }}
                title="States"
                column={[
                    // { title: 'ID', field: '_id' },
                    { title: 'State Name', field: 'StateName' },
                    { title: 'State Code', field: 'StateCode' },
                    { title: 'Region', field: 'RegionOp' },
                ]}
                data={registeredStatesList.map(state => ({...state, RegionOp: state.Region.RegionName }))} /></>}
        </div>
    );
}

export default States;