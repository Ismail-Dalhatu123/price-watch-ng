import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { GET } from '../../../api/methods';
import url from '../../../api/urls';
import AppContext from '../../../contexts/AppContext';
import getDarkClass from '../../../utils/getDarkClass';
import Greetings from '../../Greetings';
import Table from '../../Table';
import AddAdmin from '../../AddAdmin';

function Admins(props) {
    const [admins, setAdmins] = useState([])
    const [addVisible, setAddVisible] = useState(false)
    const { user } = useContext(AppContext)
    const load = async () => {
        const list = await GET(url.admins)
        if (list.ok) {
            setAdmins(list.response.data)
        }
    }
    useEffect(() => {
        load()
    },[])
    return (
        <div>
            <Greetings />
            <AddAdmin isVisivle={addVisible} setIsVisible={setAddVisible} load={load} />
            {user.isSuper && !addVisible && <>
            <div onClick={() => setAddVisible(true)} className={`btn_submit btn_add ${getDarkClass('dark-light')}`}>Add Admin</div>
            <Table
                title="Admins"
                column={[
                    { title: 'ID', field: '_id' },
                    { title: 'First Name', field: 'FirstName' },
                    { title: 'Middle Name', field: 'MiddleName' },
                    { title: 'Last Name', field: 'LastName' },
                    { title: 'Email', field: 'Email' },
                ]}
                data={admins} /></>}
        </div>
    );
}

export default Admins;