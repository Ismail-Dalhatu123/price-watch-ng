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
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';


const validationSchema = Yup.object().shape({
  regionName: Yup.string().required().label("Region Name"),
  regionCode: Yup.string().required().label("Region Code"),
});

function AddRegion({ isVisble = true, setIsVisible = () => {} }) {
    const { theme } = useContext(AppContext)
    const { loadRegions } = useContext(AdminContext)
    const addRegion = async (det) => {
        const res = await POST(url.region, det)
        if (!res.ok) return toast.error(`${det.regionName} Already Registered`)
        if (res.ok) {
            loadRegions()
        }
        
    }
    if (!isVisble) return null
    return (
        <div className="form_route">
            <div
                className={`agent_img flex justify-center align-center ${getDarkClass('bg-dark')} `}
                style={{backgroundColor: theme === 'light' ? '#fff': '#15314b', width: 100, height: 100, borderRadius: 50}}>
                    <LanguageRoundedIcon />
            </div>
            <h3 className={`text-center ${getDarkClass('dark-white')}`}>Register New Region</h3>
                        <div style={{fontWeight: 'bold', cursor: 'pointer', marginTop: 10}} onClick={() => setIsVisible(false)} className={`flex justify-center align-center mb-20`}>
                            cancel
                        </div>        
            <Form
                validationSchema={validationSchema}
                onSubmit={addRegion}
                initialValues={{ regionName: '', regionCode: '' }}>
                <FormInput
                    inputClass={getDarkClass('dark-white')}
                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                    name="regionName" placeholder="Region Name" />
                <FormInput
                    inputClass={getDarkClass('dark-white')}
                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                    name="regionCode" placeholder="Region Code" />
                <Submit title="Register Region" />
            </Form>
        </div>
    );
}

export default AddRegion;