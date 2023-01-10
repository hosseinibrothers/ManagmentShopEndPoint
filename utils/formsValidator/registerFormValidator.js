import * as Yup from "yup";

// define your fields
export const initialValues = {username: "", email: "", password: "", terms: false};

// define validation rules
export const validationSchema = Yup.object({
    username: Yup.string().required("نام کاربری را وارد کنید"),
    password: Yup.string().required("رمز عبور را وارد کنید").min(8, "رمز عبور باید حداقل شامل ۸ کاراکتر باشد"),
    email: Yup.string().required("ایمیل را وارد کنید").email(),
    terms: Yup.boolean().oneOf([true], "شما باید قبل از ثبت نام با قوانین موافقت کنید")
})