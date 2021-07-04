import React from 'react';
import { useContext } from 'react';
import AdminContext from '../../../contexts/AdminContext';
import Table from '../../Table';
import AddCategory from '../../AddCatory';
import { useState } from 'react';
import getDarkClass from '../../../utils/getDarkClass';

function Categories(props) {
    const { categories } = useContext(AdminContext)
    const [visible, setVisible] = useState(false)

    return (
        <div>
            <AddCategory isVisble={visible} setIsVisible={setVisible} />
            {!visible && <><div onClick={() => setVisible(true)} className={`btn_submit btn_add ${getDarkClass('dark-light')}`}>New Category</div>
            <Table
                title="Categories"
                column={[
                    { title: 'ID', field: '_id' },
                    { title: 'Name', field: 'CategoryName' },
                ]}
                data={categories} /></>}
        </div>
    );
}

export default Categories;