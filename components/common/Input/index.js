export default function Input({label, type, className, placeholder, name, dir, value, onChange, disabled = false, readOnly = false}) {

    const handleChange = (event) => {
        const { value } = event.target;
        onChange && onChange(value);
    };

    return (
        <>
            <label className="form-label">{label}</label>
            <input type={type} className={`form-control ${className}`} dir={dir}
                   name={name} placeholder={placeholder} value={value}
                   onChange={handleChange} disabled={disabled} readOnly={readOnly}
            />
        </>
    )
}