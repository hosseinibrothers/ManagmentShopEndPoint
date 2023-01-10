import Link from "next/link";
import {useState} from "react";

export default function InputPassword({label, textLink, link, className, dir, name, placeholder, formik}) {

    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <div className="mb-3 form-password-toggle">
            <div className="d-flex justify-content-between">
                <label className="form-label" htmlFor="password">{label}</label>
                {
                    link && (<Link href={link}>
                        <small>{textLink}</small>
                    </Link>)
                }
            </div>
            <div className="input-group input-group-merge">
                <input type={isShowPassword ? "text" : "password"} className={`form-control ${className} ${formik.errors[name] ? "is-invalid" : ""}`}
                       dir={dir} name={name} placeholder={placeholder}
                       aria-describedby="password" value={formik.values[name]} onBlur={formik.handleBlur} onChange={formik.handleChange}/>
                {
                    formik.touched[name] && formik.errors[name] ? (<div className="invalid-feedback">{formik.errors[name]}</div>) : null
                }
                <span className="input-group-text cursor-pointer" onClick={() => setIsShowPassword(prev => !prev)}><i className={`bx bx-${isShowPassword ? "show" : "hide"}`}></i></span>
            </div>
        </div>
    )
}