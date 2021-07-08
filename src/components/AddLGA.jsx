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
import FormDrop from '../form/FormDrop'
import HomeWorkRoundedIcon from '@material-ui/icons/HomeWorkRounded';
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
  state: Yup.string().required().label("State"),
  name: Yup.string().required().label("Name"),
});

function AddLGA({ isVisble = true, setIsVisible = () => {} }) {
    const { theme } = useContext(AppContext)
    const { loadLocalGovs, registeredStatesList } = useContext(AdminContext)
    const addLGA = async (det) => {
        const res = await POST(url.localGov, det)
        if (!res.ok) return toast.error(`${det.name} Already Registered`)
        if (res.ok) {
            loadLocalGovs()
        }
    }
    if (!isVisble) return null
    return (
        <div className="form_route">
            <div
                className={`agent_img flex justify-center align-center ${getDarkClass('bg-dark')} `}
                style={{backgroundColor: theme === 'light' ? '#fff': '#15314b', width: 100, height: 100, borderRadius: 50}}>
                    <HomeWorkRoundedIcon size={35} />
            </div>
            <h3 className={`text-center ${getDarkClass('dark-white')}`}>Register New Local Government</h3>
                        <div style={{fontWeight: 'bold', cursor: 'pointer', marginTop: 10}} onClick={() => setIsVisible(false)} className={`flex justify-center align-center mb-20`}>
                            cancel
                        </div>        
            <Form
                validationSchema={validationSchema}
                onSubmit={addLGA}
                initialValues={{ name: '', state: '' }}>
                <FormInput
                    inputClass={getDarkClass('dark-white')}
                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                    name="name" placeholder="Name" />
                <FormDrop options={registeredStatesList.map(state => ({
                    value: state._id,
                    label: state.StateName
                }))} inputClass={getDarkClass('dark-white')}
                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                    name="state" placeholder="State Name" />
                <Submit title="Register Local Government" />
            </Form>
        </div>
    );
}

export default AddLGA;