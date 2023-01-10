export default function Input({label, type, className, placeholder, formik, name, dir, disabled = false, readOnly = false}) {
    return (
        <div className="mb-3 position-relative">
            <label className="form-label">{label}</label>
            <input type={type} className={`form-control ${className} ${formik.errors[name] ? "is-invalid" : ""}`} dir={dir}
                   name={name} placeholder={placeholder} value={formik.values[name]}
                   onChange={formik.handleChange} disabled={disabled} onBlur={formik.handleBlur} readOnly={readOnly}
            />
            {
                formik.touched[name] && formik.errors[name] ? (<div className="invalid-feedback">{formik.errors[name]}</div>) : null
            }
        </div>
    )
}