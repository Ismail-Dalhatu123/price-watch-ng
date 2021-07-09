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
import FromPlaces from '../form/FormPlaces';
import { toast } from 'react-toastify';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import FormDrop from '../form/FormDrop';

const validationSchema = Yup.object().shape({
    state: Yup.string().required().label("State"),
    name: Yup.string().required().label("Name"),
    localGov: Yup.string().required().label("Local Government"),
    location: Yup.string().required().label("Location"),
    locationLatLng: Yup.object()
});

function AddMarket({ isVisble = true, setIsVisible = () => {}, update = false }) {
    const { theme } = useContext(AppContext)
    const { loadMarkets, registeredStatesList, registeredLocalGovs } = useContext(AdminContext)
    const addMarket = async (det) => {
        if (update) {
            
        } else {
            const res = await POST(url.market, det)
            if (!res.ok) return toast.error(`${det.name} Already Registered`)
            if (res.ok) {
                loadMarkets()
            }
        }
    }
    if (!isVisble) return null
    return (
        <div className="form_route">
            <div
                className={`agent_img flex justify-center align-center ${getDarkClass('bg-dark')} `}
                style={{backgroundColor: theme === 'light' ? '#fff': '#15314b', width: 100, height: 100, borderRadius: 50}}>
                    <RoomRoundedIcon />
            </div>
            <h3 className={`text-center ${getDarkClass('dark-white')}`}>Register New Market</h3>
                <div style={{fontWeight: 'bold', cursor: 'pointer', marginTop: 10}} onClick={() => setIsVisible(false)} className={`flex justify-center align-center mb-20`}>
                    cancel
                </div>        
            <Form
                validationSchema={validationSchema}
                onSubmit={addMarket}
                initialValues={{ name: update ? update.Name : '', state: update ? update.State : '', localGov: update ? update.localGov : '' , location: update ? update.Location : '', locationLatLng: update ? update.locationLatLng : '' }}>
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
                <FormDrop options={registeredLocalGovs.map(lg => ({
                    value: lg._id,
                    label: lg.Name,
                    depends: lg.State._id
                }))}
                    depends="state"
                    inputClass={getDarkClass('dark-white')}
                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                    name="localGov" placeholder="Local Government" />
                <FromPlaces name="location" />
                <Submit title="Registe Market" />
            </Form>
        </div>
    );
}

export default AddMarket;