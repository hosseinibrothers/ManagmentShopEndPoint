import Link from "next/link";
import Input from "../../../components/common/Input";
import InputPassword from "../../../components/common/inputPassword";
import {useState} from "react";
import {changeFieldValue} from "../../../utils/changeFieldValue";
import {register} from "../../../services/admin";

export default function Register() {

    const [fieldValues, setFieldValues] = useState({username: "", email: "", password: ""})

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const data = register(fieldValues);
        } catch (ex) {
            console.log(ex)
        }
    }

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

                            <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <Input
                                        type="text"
                                        className="text-start"
                                        dir="ltr"
                                        name="username"
                                        placeholder="نام کاربری خود را وارد کنید"
                                        label="نام کاربری"
                                        value={fieldValues.username}
                                        onChange={value => changeFieldValue(setFieldValues, fieldValues, "username", value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <Input
                                        type="email"
                                        className="text-start"
                                        dir="ltr"
                                        name="email"
                                        placeholder="ایمیل خود را وارد کنید"
                                        label="ایمیل"
                                        value={fieldValues.email}
                                        onChange={value => changeFieldValue(setFieldValues, fieldValues, "email", value)}
                                    />
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <InputPassword
                                        label="رمز عبور"
                                        className="text-start"
                                        dir="ltr"
                                        name="password"
                                        placeholder="············"
                                        value={fieldValues.password}
                                        onChange={value => changeFieldValue(setFieldValues, fieldValues, "password", value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="terms-conditions"
                                               name="terms"/>
                                            <label className="form-check-label" htmlFor="terms-conditions">
                                                من موافقم با<span>&nbsp;</span>
                                                <a href="javascript:void(0);">سیاست حریم خصوصی و قوانین</a>
                                            </label>
                                    </div>
                                </div>
                                <button className="btn btn-primary d-grid w-100">عضویت</button>
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