
import * as Yup from "yup";

// define your fields
export const initialValues = {password: "", confirmPassword: ""};

// define validation rules
export const validationSchema = Yup.object({
    password: Yup.string().required("رمز عبور را وارد کنید").min(8, "رمز عبور باید حداقل شامل ۸ کاراکتر باشد"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), ""], "رمز عبور را مجددا وارد کنید").required("رمز عبور هم خوانی ندارد")
})