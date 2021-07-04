import React, { useContext } from 'react';

import Form from '../form/Form';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import * as Yup from 'yup'
import AppContext from '../contexts/AppContext';
import getDarkClass from '../utils/getDarkClass';
import { POST } from '../api/methods';
import url from '../api/urls';
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required().label('First Name'),
    middleName: Yup.string().label('Last Name'),
    lastName: Yup.string().required().label('Middle Name'),
    email: Yup.string().email().required().label("Email"),
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

function AddAdmin({ isVisivle = false, setIsVisible = () =>{}, load = () => {} }) {
    const { theme } = useContext(AppContext)
    if(!isVisivle) return null
    const registerAgent = async (data) => {
        console.log(data)
        const cred = { ...data }
        delete cred['password2']
        const res = await POST(url.admins, cred)
        if (!res.ok) return toast.error(`${data.firstName} Already Registered`)
        if (res.ok) {
            toast.info('Registered')
            load()
            setIsVisible(false)
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
                        <h3 className={`text-center ${getDarkClass('dark-white')}`}>Register New Admin</h3>
                        <div style={{fontWeight: 'bold', cursor: 'pointer', marginTop: 10}} onClick={() => setIsVisible(false)} className={`flex justify-center align-center mb-20`}>
                            cancel
                        </div>        
                    <div className="mx-flex">
                        <Form
                            validationSchema={validationSchema}
                            onSubmit={registerAgent}
                            initialValues={{ firstName: '', lastName: '', middleName: '', email: '', password: '', password2: '' }}>
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
                                    name="email" placeholder="Email" />
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

export default AddAdmin;