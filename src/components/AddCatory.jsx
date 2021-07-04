import React, { useContext } from 'react';
import Form from '../form/Form';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import getDarkClass from '../utils/getDarkClass';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import AppContext from '../contexts/AppContext';
import * as Yup from 'yup'
import { POST } from '../api/methods';
import url from '../api/urls';
import AdminContext from '../contexts/AdminContext';
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
  categoryName: Yup.string().required().label("Category Name"),
});

function AddCategory({ isVisble = true, setIsVisible = () => {} }) {
    const { theme } = useContext(AppContext)
    const { loadCategories } = useContext(AdminContext)
    const addCategory = async (det) => {
        const res = await POST(url.categories, det)
        if (!res.ok) return toast.error(`${det.categoryName} Already Registered`)
        if (res.ok) {
            loadCategories()
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
            <h3 className={`text-center ${getDarkClass('dark-white')}`}>Add New Category</h3>
                        <div style={{fontWeight: 'bold', cursor: 'pointer', marginTop: 10}} onClick={() => setIsVisible(false)} className={`flex justify-center align-center mb-20`}>
                            cancel
                        </div>        
            <Form
                validationSchema={validationSchema}
                onSubmit={addCategory}
                initialValues={{ categoryName: '' }}>
                <FormInput
                    inputClass={getDarkClass('dark-white')}
                    className={`light-white-bg mx-50 ${getDarkClass('dark-accent')}`}
                    name="categoryName" placeholder="Category Name" />
                <Submit title="Add Category" />
            </Form>
        </div>
    );
}

export default AddCategory;