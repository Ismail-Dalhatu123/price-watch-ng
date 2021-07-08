import React, { useContext } from 'react';
import Form from '../form/Form';
import FormInput from '../form/FormInput';
import FormDrop from '../form/FormDrop';
import Submit from '../form/Submit';
import getDarkClass from '../utils/getDarkClass';
import KitchenRoundedIcon from '@material-ui/icons/KitchenRounded';
import AppContext from '../contexts/AppContext';
import * as Yup from 'yup'
import { POST } from '../api/methods';
import url from '../api/urls';
import AdminContext from '../contexts/AdminContext';
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
  commodityName: Yup.string().required().label("Commodity Name"),
});

function AddCommodity({ isVisble = true, setIsVisible = () => {} }) {
    const { theme } = useContext(AppContext)
    const { loadCommodities, categories } = useContext(AdminContext)
    const addCommodity = async (det) => {
        const res = await POST(url.commodities, det)
        if (!res.ok) return toast.error(`${det.commodityName} Already Registered`)
        if (res.ok) {
            loadCommodities()
        }
    }
    if (!isVisble) return null
    return (
        <div className="form_route">
            <div
                className={`agent_img flex justify-center align-center ${getDarkClass('bg-dark')} `}
                style={{backgroundColor: theme === 'light' ? '#fff': '#15314b', width: 100, height: 100, borderRadius: 50}}>
                    <KitchenRoundedIcon />
            </div>
            <h3 className={`text-center ${getDarkClass('dark-white')}`}>Add New Commodity</h3>
                        <div style={{fontWeight: 'bold', cursor: 'pointer', marginTop: 10}} onClick={() => setIsVisible(false)} className={`flex justify-center align-center mb-20`}>
                            cancel
                        </div>        
            <Form
                validationSchema={validationSchema}
                onSubmit={addCommodity}
                initialValues={{ commodityName: '' }}>
                <FormInput
                    inputClass={getDarkClass('dark-white')}
                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                    name="commodityName" placeholder="Commodity Name" />
                <FormDrop options={categories.map(cat => ({
                                    value: cat._id,
                                    label: cat.CategoryName
                                }))} inputClass={getDarkClass('dark-white')}
                                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                                    name="category" placeholder="Category" />
                <Submit title="Register Commodity" />
            </Form>
        </div>
    );
}

export default AddCommodity;