import React, { useContext } from 'react';

import Form from '../form/Form';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import * as Yup from 'yup'
import AppContext from '../contexts/AppContext';
import getDarkClass from '../utils/getDarkClass';
import AdminContext from '../contexts/AdminContext';
import FromDrop from '../form/FromDrop';
import { POST } from '../api/methods';
import url from '../api/urls';
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required().label('First Name'),
    middleName: Yup.string().label('Last Name'),
    lastName: Yup.string().required().label('Middle Name'),
    email: Yup.string().email().required().label("Email"),
    state: Yup.string().required().label('State'),
    localGov: Yup.string().required().label('Local Government'),
    phoneNumber: Yup.string().required().label('Phone Number'),
    market: Yup.string().required().label('Market'),
    password: Yup.string()
    .required()
    .label("Password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
    password2: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords not matching"
  ),
});

function AddAgent({ isVisivle = false, setIsVisible = () =>{} }) {
    const { theme } = useContext(AppContext)
    const { registeredStatesList, registeredLocalGovs, registeredMarkets } = useContext(AdminContext)
    if(!isVisivle) return null
    const registerAgent = async (data) => {
        const cred = { ...data }
        delete cred['password2']
        const res = await POST(url.agents.base, cred)
        if (!res.ok) return toast.error(`${data.firstName} Already Registered`)
        if (res.ok) {
            toast.info('Registered')
        }
    }
    return (
        <div className="flex justify-center align-center">
                    <div className={`form_route ${getDarkClass('bg-dark')}`}>
                        <div
                            className={`agent_img flex justify-center align-center ${getDarkClass('bg-dark')} `}
                            style={{backgroundColor: theme === 'light' ? '#fff': '#15314b', width: 100, height: 100, borderRadius: 50}}
                        >
                            <PersonRoundedIcon />
                        </div>
                        <h3 className={`text-center ${getDarkClass('dark-white')}`}>Register Submission Agent</h3>
                        <div style={{fontWeight: 'bold', cursor: 'pointer', marginTop: 10}} onClick={() => setIsVisible(false)} className={`flex justify-center align-center mb-20`}>
                            cancel
                        </div>        
                    <div className="mx-flex">
                        <Form
                            validationSchema={validationSchema}
                            onSubmit={registerAgent}
                            initialValues={{ firstName: '',phoneNumber: '', lastName: '', middleName: '', email: '', market: '', state: '',localGov: '', password: '', password2: '' }}>
                                <FormInput
                                    inputClass={getDarkClass('dark-white')}
                                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                                    name="firstName" placeholder="First Name" />
                                <FormInput
                                    inputClass={getDarkClass('dark-white')}
                                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                                    name="middleName" placeholder="Middle Name (optional)" />
                                <FormInput
                                    inputClass={getDarkClass('dark-white')}
                                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                                    name="lastName" placeholder="Last Name" />
                                <FormInput
                                    inputClass={getDarkClass('dark-white')}
                                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                                    type="number"
                                    name="phoneNumber" placeholder="Phone Number" />
                                <FormInput
                                    inputClass={getDarkClass('dark-white')}
                                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                                    name="email" placeholder="Email" />
                                
                                <FromDrop options={registeredStatesList.map(state => ({
                                    value: state._id,
                                    label: state.StateName
                                }))} inputClass={getDarkClass('dark-white')}
                                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                                    name="state" placeholder="State Name" />
                                <FromDrop options={registeredLocalGovs.map(lg => ({
                                    value: lg._id,
                                    label: lg.Name,
                                    depends: lg.State._id
                                }))}
                                    depends="state"
                                    inputClass={getDarkClass('dark-white')}
                                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                                    name="localGov" placeholder="Local Government" />
                                <FromDrop options={registeredMarkets.map(mk => ({
                                    value: mk._id,
                                    label: mk.Name,
                                    depends: mk.State._id
                                    }))}
                                    depends="state"
                                    inputClass={getDarkClass('dark-white')}
                                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                                    name="market" placeholder="Market" />
                                <FormInput
                                    inputClass={getDarkClass('dark-white')}
                                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                                    name="password" placeholder="Password" />
                                <FormInput
                                    inputClass={getDarkClass('dark-white')}
                                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                                    name="password2" placeholder="Confirm Password" />
                                <Submit className="dark-light" title="Register" />
                            </Form>
                        </div>
                    </div>
                </div>
    );
}

export default AddAgent;