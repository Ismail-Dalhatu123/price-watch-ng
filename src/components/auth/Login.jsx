import React, { useContext, useEffect } from "react";
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';import Form from "../../form/Form";
import FormInput from "../../form/FormInput";
import Submit from "../../form/Submit";


import * as Yup from "yup";
import ThemeToggler from "../ThemeToggler";
import AppContext from "../../contexts/AppContext";
import { toast } from "react-toastify";
import useClientApi from "../../hooks/useClientApi";
import decodeJWT from "../../utils/decodeJWT";
import getDarkClass from "../../utils/getDarkClass";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().label("Password"),
});


function Login(props) {
  const { setUser } = useContext(AppContext)
  const { AuthenticateUser } = useClientApi()

  const restoreUser = () => {
    const token = decodeJWT()
    if (token.succes) setUser(token.tokenData)
  }

  useEffect(() => {
    restoreUser()
  })
  
  const authenticate = async (cred) => {
    const res = await AuthenticateUser(cred)
    if (!res.ok) return toast.error('Invalid Email Or Password')
    localStorage.setItem('PWtoken', res.response.data.token)
    restoreUser()
  }

  return <div className={`container bg-light-gray flex justify-center align-center ${getDarkClass('bg-dark')}`}>
    <div className={`login_form ${getDarkClass('dark-accent')}`}>
      <div className={`user_img flex justify-center align-center ${getDarkClass('dark-indigo')}`}>
        <PersonRoundedIcon fontSize="large" />
      </div>
      <div className="form_content">
        <h3 className={`text-center mt-60 mb-20 ${getDarkClass('dark-white')}`}>Admin Log in</h3>
        <Form validationSchema={validationSchema} onSubmit={authenticate} initialValues={{ email: '', password: '' }}>
          <FormInput
            inputClass={getDarkClass('dark-white')}
            className={getDarkClass('bg-dark-gray')}
            // type="email"
            name="email"
            placeholder="Email" />
          <FormInput
            inputClass={getDarkClass('dark-white')}
            type="password"
            className={getDarkClass('bg-dark-gray')}
            name="password"
            placeholder="Password" />
          <Submit title="Login" />
        </Form>
        <ThemeToggler className="icon theme" />
        </div>
      </div>
    </div>;
}

export default Login;
