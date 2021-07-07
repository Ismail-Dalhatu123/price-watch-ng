import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/AdminContext';
import getDarkClass from '../../../utils/getDarkClass';
import AddQuantity from '../../AddQuantity';
import Table from '../../Table';

function Quantities(props) {
    const { quantities } = useContext(AdminContext)
    const [visible, setVisible] = useState(false)

    return (
        <div>
            <AddQuantity isVisble={visible} setIsVisible={setVisible} />
            {!visible && <><div onClick={() => setVisible(true)} className={`btn_submit btn_add ${getDarkClass('dark-light')}`}>New Quantity</div>
            <Table
                title="Quantities"
                column={[
                    // { title: 'ID', field: '_id' },
                    { title: 'Quantity', field: 'Quantity' },
                    { title: 'Commodity', field: 'Commodity' },
                ]}
                data={quantities.map(agent => ({ ...agent, Commodity: agent.Commodity['CommodityName'] }))} /></>}
        </div>
    );
}

export default Quantities;