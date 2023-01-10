import * as Yup from "yup";
// define your fields
export const initialValues = {username: "", password: ""};

// define validation rules
export const validationSchema = Yup.object({
    username: Yup.string().required("نام کاربری را وارد کنید"),
    password: Yup.string().required("رمز عبور را وارد کنید").min(8, "رمز عبور باید حداقل شامل ۸ کاراکتر باشد")
})