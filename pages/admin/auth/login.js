import Link from "next/link";
import Input from "../../../components/common/Input";
import InputPassword from "../../../components/common/inputPassword";
import {useState} from "react";
import {changeFieldValue} from "../../../utils/changeFieldValue";
import {login} from "../../../services/admin";
export default function Login() {

    const [fieldValues, setFieldValues] = useState({username: "", password: ""})

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const data = login(fieldValues);
        } catch (ex) {
            console.log(ex)
        }
    }

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

                            <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <Input
                                        type="text"
                                        className="text-start"
                                        dir="ltr"
                                        placeholder="ایمیل یا نام کاربری خود را وارد کنید"
                                        label="ایمیل یا نام کاربری"
                                        name="username"
                                        value={fieldValues.username}
                                        onChange={value => changeFieldValue(setFieldValues, fieldValues, "username", value)}
                                    />
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <InputPassword
                                        label="رمز عبور"
                                        link="./forget-password"
                                        textLink="رمز عبور را فراموش کردید"
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
                                        <input className="form-check-input" type="checkbox" id="remember-me"/>
                                        <label className="form-check-label" htmlFor="remember-me"> به خاطر سپاری </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary d-grid w-100" type="submit">ورود</button>
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