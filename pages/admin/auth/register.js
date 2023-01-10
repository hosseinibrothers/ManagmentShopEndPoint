import Link from "next/link";
import Input from "../../../components/common/Input";
import InputPassword from "../../../components/common/InputPassword";;
import {register} from "../../../services/admin";
import {useFormik} from "formik";
import {initialValues} from "../../../utils/formsValidator/registerFormValidator";
import {validationSchema} from "../../../utils/formsValidator/registerFormValidator";

export default function Register() {

    const onSubmit = (values) => {
        try {
            const data = register(values);
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
                            <h4 className="mb-2">ماجراجویی اینجا شروع می‌شود</h4>
                            <p className="mb-4">مدیریت برنامه خود را آسان و جذاب کنید!</p>

                            <form id="formAuthentication"
                                  className={`needs-validation mb-3 ${!formik.isValid ? "was-validated" : ""}`}
                                  onSubmit={formik.handleSubmit} noValidate={true}>
                                <Input
                                    type="text"
                                    className="text-start"
                                    dir="ltr"
                                    name="username"
                                    placeholder="نام کاربری خود را وارد کنید"
                                    label="نام کاربری"
                                    formik={formik}
                                />
                                <Input
                                    type="email"
                                    className="text-start"
                                    dir="ltr"
                                    name="email"
                                    placeholder="ایمیل خود را وارد کنید"
                                    label="ایمیل"
                                    formik={formik}
                                />
                                <InputPassword
                                    label="رمز عبور"
                                    className="text-start"
                                    dir="ltr"
                                    name="password"
                                    placeholder="············"
                                    formik={formik}
                                />
                                <div className="mb-3">
                                    <div className="form-check position-relative">
                                        <input className={`form-check-input ${formik.errors['terms'] ? "is-invalid" : ""}`} type="checkbox" id="terms-conditions"
                                               name="terms" checked={formik.values['terms']} onChange={formik.handleChange}/>
                                        <label className="form-check-label" htmlFor="terms-conditions">
                                            من موافقم با<span>&nbsp;</span>
                                            <a href="javascript:void(0);">سیاست حریم خصوصی و قوانین</a>
                                        </label>
                                        {
                                            formik.touched['terms'] && formik.errors['terms'] ? (<div className="invalid-feedback">{formik.errors['terms']}</div>) : null
                                        }
                                    </div>
                                </div>
                                <button className="btn btn-primary d-grid w-100"
                                        disabled={!formik.isValid}>عضویت
                                </button>
                            </form>

                            <p className="text-center">
                                <span>حساب کاربری دارید؟</span><span>&nbsp;</span>
                                <Link href="./login">
                                    <span>وارد شوید</span>
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
        </div>
    )
}