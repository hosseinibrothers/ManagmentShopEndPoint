import * as Yup from "yup";
// define your fields
export const initialValues = {email: ""};

// define validation rules
export const validationSchema = Yup.object({
    email: Yup.string().required("ایمیل را وارد کنید").email()
})