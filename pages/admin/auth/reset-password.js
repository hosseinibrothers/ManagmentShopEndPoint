import Link from "next/link";
import InputPassword from "../../../components/common/inputPassword";
import {useState} from "react";
import {changeFieldValue} from "../../../utils/changeFieldValue";
import {resetPassword} from "../../../services/admin";

export default function ResetPassword() {

    const [fieldValues, setFieldValues] = useState({password: "", confirmPassword: ""})

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const data = resetPassword(fieldValues);
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
                            <h4 className="mb-2">بازنشانی رمز عبور</h4>
                            <p className="mb-4">برای <span className="fw-bold">john.doe@email.com</span></p>
                            <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit}>
                                <div className="mb-3 form-password-toggle">
                                    <InputPassword
                                        label="رمز عبور جدید"
                                        className="text-start"
                                        dir="ltr"
                                        name="password"
                                        placeholder="············"
                                        value={fieldValues.password}
                                        onChange={value => changeFieldValue(setFieldValues, fieldValues, "password", value)}
                                    />
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <InputPassword
                                        label="تایید رمز عبور"
                                        className="text-start"
                                        dir="ltr"
                                        name="password"
                                        placeholder="············"
                                        value={fieldValues.confirmPassword}
                                        onChange={value => changeFieldValue(setFieldValues, fieldValues, "confirmPassword", value)}
                                    />
                                </div>
                                <button className="btn btn-primary d-grid w-100 mb-3">تنظیم رمز عبور جدید</button>
                                <div className="text-center">
                                    <Link href="./login">
                                        <i className="bx bx-chevron-left scaleX-n1-rtl"></i>
                                        بازگشت به ورود
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}