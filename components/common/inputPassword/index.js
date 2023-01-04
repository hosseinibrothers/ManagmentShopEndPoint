import Link from "next/link";
import {useState} from "react";

export default function InputPassword({label, textLink, link, className, dir, name, placeholder, value, onChange}) {

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleChange = (event) => {
        const { value } = event.target;
        onChange(value);
    };

    return (
        <>
            <div className="d-flex justify-content-between">
                <label className="form-label" htmlFor="password">{label}</label>
                {
                    link && (<Link href={link}>
                        <small>{textLink}</small>
                    </Link>)
                }
            </div>
            <div className="input-group input-group-merge">
                <input type={isShowPassword ? "text" : "password"} className={`form-control ${className}`}
                       dir={dir} name={name} placeholder={placeholder}
                       aria-describedby="password" value={value} onChange={handleChange}/>
                <span className="input-group-text cursor-pointer" onClick={() => setIsShowPassword(prev => !prev)}><i className={`bx bx-${isShowPassword ? "show" : "hide"}`}></i></span>
            </div>
        </>
    )
}