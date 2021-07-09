import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/AdminContext';
import getDarkClass from '../../../utils/getDarkClass';
import AddRegion from '../../AddRegion';
import Table from '../../Table';

function States() {
    const { registeredRegions, } = useContext(AdminContext)
    const [visible, setVisible] = useState(false)
    const [update, setUpdate] = useState(false)
    return (
        <div>
            <AddRegion update={update} isVisble={visible} setIsVisible={setVisible} />
            {!visible && <><div onClick={() => setVisible(true)} className={`btn_submit btn_add ${getDarkClass('dark-light')}`}>New Region</div>
            <Table
                    title="Regions"
                    editItem={(a, b) => {
                        setUpdate({ _id: b._id, regionName: b.RegionName, regionCode: b.RegionCode })
                        setVisible(true)
                    }}
                column={[
                    // { title: 'ID', field: '_id' },
                    { title: 'Region Name', field: 'RegionName' },
                    { title: 'Region Code', field: 'RegionCode' },
                ]}
                data={registeredRegions} /></>}
        </div>
    );
}

export default States;