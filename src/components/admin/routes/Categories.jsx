import React from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/AdminContext';
import Table from '../../Table';
import AddCategory from '../../AddCatory';

function Categories(props) {
    const { categories } = useContext(AdminContext)
    return (
        <div>
            <AddCategory />
            <Table
                title="Categories"
                column={[
                    { title: 'ID', field: '_id' },
                    { title: 'Name', field: 'CategoryName' },
                ]}
                data={categories} />
        </div>
    );
}

export default Categories;