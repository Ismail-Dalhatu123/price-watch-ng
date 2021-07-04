import React from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/AdminContext';
import AddCommodity from '../../AddCommodity';
import Table from '../../Table';

function Commodities(props) {
    const { commoditiesList } = useContext(AdminContext)
    return (
        <div>
            <AddCommodity />
            <Table
                title="Commodities"
                column={[
                    { title: 'ID', field: '_id' },
                    { title: 'Name', field: 'CommodityName' },
                    { title: 'Category', field: 'Category' },
                ]}
                data={commoditiesList.map(cate => ({...cate, Category: cate.Category.CategoryName}))} />
        </div>
    );
}

export default Commodities;