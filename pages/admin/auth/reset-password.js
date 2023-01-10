import Link from "next/link";
import InputPassword from "../../../components/common/InputPassword";
import {resetPassword} from "../../../services/admin";
import {useFormik} from "formik";
import {initialValues, validationSchema} from "../../../utils/formsValidator/resetPasswordFormValidator";

export default function ResetPassword() {

    const onSubmit = values => {
        try {
            const data = resetPassword(values);
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
                            <h4 className="mb-2">بازنشانی رمز عبور</h4>
                            <p className="mb-4">برای <span className="fw-bold">john.doe@email.com</span></p>
                            <form id="formAuthentication"
                                  className={`needs-validation mb-3 ${!formik.isValid ? "was-validated" : ""}`}
                                  onSubmit={formik.handleSubmit}
                                  noValidate={true}
                            >
                                <InputPassword
                                    label="رمز عبور جدید"
                                    className="text-start"
                                    dir="ltr"
                                    name="password"
                                    placeholder="············"
                                    formik={formik}
                                />
                                <InputPassword
                                    label="تایید رمز عبور"
                                    className="text-start"
                                    dir="ltr"
                                    name="confirmPassword"
                                    placeholder="············"
                                    formik={formik}
                                />
                                <button className="btn btn-primary d-grid w-100 mb-3" disabled={!formik.isValid}>تنظیم
                                    رمز عبور جدید
                                </button>
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