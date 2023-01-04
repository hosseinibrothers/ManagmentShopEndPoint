export default function Input({label, type, className, placeholder, name, dir, value, onChange}) {

    const handleChange = (event) => {
        const { value } = event.target;
        onChange(value);
    };

    return (
        <>
            <label className="form-label">{label}</label>
            <input type={type} className={`form-control ${className}`} dir={dir}
                   name={name} placeholder={placeholder} value={value}
                   onChange={handleChange}
            />
        </>
    )
}