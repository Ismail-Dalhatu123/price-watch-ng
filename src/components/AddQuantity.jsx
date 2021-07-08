import React, { useContext } from 'react';
import Form from '../form/Form';
import FormInput from '../form/FormInput';
import FormDrop from '../form/FormDrop';
import Submit from '../form/Submit';
import getDarkClass from '../utils/getDarkClass';
import AppContext from '../contexts/AppContext';
import * as Yup from 'yup'
import { POST } from '../api/methods';
import url from '../api/urls';
import AdminContext from '../contexts/AdminContext';
import { toast } from 'react-toastify';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';


const validationSchema = Yup.object().shape({
  commodity: Yup.string().required().label("Commodity"),
  quantity: Yup.string().required().label("Quantity"),
});

function AddQuantity({ isVisble = true, setIsVisible = () => {} }) {
    const { theme } = useContext(AppContext)
    const { loadQuantities, commoditiesList } = useContext(AdminContext)
    const addQuantity = async (det) => {
        const res = await POST(url.quantities, det)
        if (!res.ok) return toast.error(`${det.quantity} Already Registered`)
        if (res.ok) {
            setIsVisible()
            loadQuantities()
        }
    }
    if (!isVisble) return null
    return (
        <div className="form_route">
            <div
                className={`agent_img flex justify-center align-center ${getDarkClass('bg-dark')} `}
                style={{backgroundColor: theme === 'light' ? '#fff': '#15314b', width: 100, height: 100, borderRadius: 50}}>
                    <CategoryRoundedIcon />
            </div>
            <h3 className={`text-center ${getDarkClass('dark-white')}`}>Add Quantity</h3>
                        <div style={{fontWeight: 'bold', cursor: 'pointer', marginTop: 10}} onClick={() => setIsVisible(false)} className={`flex justify-center align-center mb-20`}>
                            cancel
                        </div>        
            <Form
                validationSchema={validationSchema}
                onSubmit={addQuantity}
                initialValues={{ commodity: '', quantity: '' }}>
                <FormDrop options={commoditiesList.map(com => ({
                    value: com._id,
                    label: com.CommodityName
                }))}
                    inputClass={getDarkClass('dark-white')}
                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                    name="commodity" placeholder="Commodity" />
                <FormInput
                    inputClass={getDarkClass('dark-white')}
                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                    name="quantity" placeholder="Quantity e.g 1 bag, 3 mudu" />
                <Submit title="Submit" />
            </Form>
        </div>
    );
}

export default AddQuantity;