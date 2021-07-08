import React, { useContext } from 'react';
import Form from '../form/Form';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import getDarkClass from '../utils/getDarkClass';
import AppContext from '../contexts/AppContext';
import * as Yup from 'yup'
import { POST } from '../api/methods';
import url from '../api/urls';
import AdminContext from '../contexts/AdminContext';
import { toast } from 'react-toastify';
import ApartmentRoundedIcon from '@material-ui/icons/ApartmentRounded';
import FormDrop from '../form/FormDrop'

const validationSchema = Yup.object().shape({
  stateName: Yup.string().required().label("State Name"),
  stateCode: Yup.string().required().label("State Code"),
  region: Yup.string().required().label("Region"),
});

function AddState({ isVisble = true, setIsVisible = () => {} }) {
    const { theme } = useContext(AppContext)
    const { loadStates, registeredRegions } = useContext(AdminContext)
    const addState = async (det) => {
        const res = await POST(url.states, det)
        if (!res.ok) return toast.error(`${det.stateName} Already Registered`)
        if (res.ok) {
            loadStates()
        }
        
    }
    if (!isVisble) return null
    return (
        <div className="form_route">
            <div
                className={`agent_img flex justify-center align-center ${getDarkClass('bg-dark')} `}
                style={{backgroundColor: theme === 'light' ? '#fff': '#15314b', width: 100, height: 100, borderRadius: 50}}>
                    <ApartmentRoundedIcon />
            </div>
            <h3 className={`text-center ${getDarkClass('dark-white')}`}>Register New State</h3>
                        <div style={{fontWeight: 'bold', cursor: 'pointer', marginTop: 10}} onClick={() => setIsVisible(false)} className={`flex justify-center align-center mb-20`}>
                            cancel
                        </div>        
            <Form
                validationSchema={validationSchema}
                onSubmit={addState}
                initialValues={{ stateName: '', stateCode: '', region: '' }}>
                <FormInput
                    inputClass={getDarkClass('dark-white')}
                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                    name="stateName" placeholder="State Name" />
                <FormInput
                    inputClass={getDarkClass('dark-white')}
                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                    name="stateCode" placeholder="State Code" />
                <FormDrop options={registeredRegions.map(rg => ({
                    value: rg._id,
                    label: rg.RegionName
                }))}
                    inputClass={getDarkClass('dark-white')}
                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                    name="region" placeholder="Region" />
                <Submit title="Add State" />
            </Form>
        </div>
    );
}

export default AddState;