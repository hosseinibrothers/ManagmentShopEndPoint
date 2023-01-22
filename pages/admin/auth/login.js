import Link from "next/link";
import Input from "../../../components/common/Input";
import InputPassword from "../../../components/common/InputPassword";
import {login} from "../../../services/admin";
import {useFormik} from "formik";
import {initialValues} from "../../../utils/formsValidator/loginFormValidator";
import {validationSchema} from "../../../utils/formsValidator/loginFormValidator";
import {signIn} from "next-auth/react";


export default function Login() {

    const onSubmit = (values) => {
        signIn('credentials',
            {
                email: values.username,
                password: values.password,
                // The page where you want to redirect to after a
                // successful login
                callbackUrl: `${window.location.origin}/admin/dashboard`
            }
        )
    }


    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: false
    });

    return (<div className="container-xxl">
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
                        <h4 className="mb-2">به فرست خوش آمدید!</h4>
                        <p className="mb-4">لطفا وارد حساب خود شده و ماجراجویی را شروع کنید</p>

                        <form id="formAuthentication"
                              className={`needs-validation mb-3 ${!formik.isValid ? "was-validated" : ""}`}
                              noValidate={true} onSubmit={formik.handleSubmit}>
                            <Input
                                type="text"
                                className="text-start"
                                dir="ltr"
                                placeholder="ایمیل یا نام کاربری خود را وارد کنید"
                                label="ایمیل یا نام کاربری"
                                name="username"
                                formik={formik}
                            />
                            <InputPassword
                                label="رمز عبور"
                                link="./forget-password"
                                textLink="رمز عبور را فراموش کردید"
                                className="text-start"
                                dir="ltr"
                                name="password"
                                formik={formik}
                                placeholder="············"
                            />
                            <div className="mb-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="remember-me"/>
                                    <label className="form-check-label" htmlFor="remember-me"> به خاطر سپاری </label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary d-grid w-100" type="submit"
                                        disabled={!formik.isValid}>ورود
                                </button>
                            </div>
                        </form>

                        <p className="text-center">
                            <span>کاربر جدید هستید؟</span><span>&nbsp;</span>
                            <Link href="./register">
                                <span>یک حساب بسازید</span>
                            </Link>
                        </p>

                        <div className="divider my-4">
                            <div className="divider-text">یا</div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <a href="javascript:;" className="btn btn-icon btn-label-facebook me-3">
                                <i className="tf-icons bx bxl-facebook"></i>
                            </a>

                            <a href="javascript:;" className="btn btn-icon btn-label-google-plus me-3">
                                <i className="tf-icons bx bxl-google-plus"></i>
                            </a>

                            <a href="javascript:;" className="btn btn-icon btn-label-twitter">
                                <i className="tf-icons bx bxl-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}