import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/AdminContext';
import getDarkClass from '../../../utils/getDarkClass';
import AddLGA from '../../AddLGA';
import Table from '../../Table';

function LocalGovs(props) {
    const { registeredLocalGovs } = useContext(AdminContext)
    const [visible, setVisible] = useState(false)

    return (
        <div>
            <AddLGA isVisble={visible} setIsVisible={setVisible} />
            {!visible && <><div onClick={() => setVisible(true)} className={`btn_submit btn_add ${getDarkClass('dark-light')}`}>New LGA</div>
            <Table
                title="Local Governments"
                column={[
                    // { title: 'ID', field: '_id' },
                    { title: 'Name', field: 'Name' },
                    { title: 'State', field: 'State', },
                ]}
                data={registeredLocalGovs.map(agent => ({ ...agent, State: agent.State['StateName'] }))}
            /></>}
        </div>
    );
}

export default LocalGovs;