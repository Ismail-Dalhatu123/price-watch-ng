import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/AdminContext';
import getDarkClass from '../../../utils/getDarkClass';
import AddCommodity from '../../AddCommodity';
import Table from '../../Table';

function Commodities(props) {
    const { commoditiesList } = useContext(AdminContext)
    const [visible, setVisible] = useState(false)

    return (
        <div>
            <AddCommodity isVisble={visible} setIsVisible={setVisible} />
            {!visible && <><div onClick={() => setVisible(true)} className={`btn_submit btn_add ${getDarkClass('dark-light')}`}>New Commodity</div>
            <Table
                title="Commodities"
                column={[
                    { title: 'ID', field: '_id' },
                    { title: 'Name', field: 'CommodityName' },
                    { title: 'Category', field: 'Category' },
                ]}
                data={commoditiesList.map(cate => ({...cate, Category: cate.Category.CategoryName}))} /></>}
        </div>
    );
}

export default Commodities;