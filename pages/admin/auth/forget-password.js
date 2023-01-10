import Link from "next/link";
import Input from "../../../components/common/Input";
import {forgetPassword} from "../../../services/admin";
import {useFormik} from "formik";
import {initialValues, validationSchema} from "../../../utils/formsValidator/forgetPasswordFormValidator";

export default function ForgetPassword() {

    const onSubmit = values => {
        try {
            const data = forgetPassword(values);
        } catch (ex) {
            console.log(ex)
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: false
    });


    return (
        <div className="container-xxl">
            <div className="authentication-wrapper authentication-basic container-p-y">
                <div className="authentication-inner py-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="app-brand justify-content-center">
                                <Link href="/" className="app-brand-link gap-2">
                                    <span className="app-brand-logo demo">
                                    </span>
                                    <span className="app-brand-text demo h3 mb-0 fw-bold">فرست</span>
                                </Link>
                            </div>
                            <h4 className="mb-2">رمز عبور را فراموش کردید؟</h4>
                            <p className="mb-4">ایمیل خود را وارد کنید و ما دستورالعمل های لازم را برای بازنشانی رمز
                                عبور برای شما ارسال خواهیم کرد.</p>
                            <form id="formAuthentication"
                                  className={`needs-validation mb-3 ${!formik.isValid ? "was-validated" : ""}`}
                                  onSubmit={formik.handleSubmit} noValidate={true}>
                                <Input
                                    type="email"
                                    className="text-start"
                                    dir="ltr"
                                    name="email"
                                    placeholder="ایمیل خود را وارد کنید"
                                    label="ایمیل"
                                    formik={formik}
                                />
                                <button className="btn btn-primary d-grid w-100">ارسال لینک بازنشانی</button>
                            </form>
                            <div className="text-center">
                                <Link href="./login"
                                      className="d-flex align-items-center justify-content-center">
                                    <i className="bx bx-chevron-left scaleX-n1-rtl"></i>
                                    بازگشت به ورود
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}