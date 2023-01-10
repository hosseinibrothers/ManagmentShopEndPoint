export default function Toggle({type, label, checked, className, value, onChange, disabled, classNameInput, name, id}) {

    const handleChange = e => {
        if (type === "checkbox") {
            onChange && onChange(e.target.checked)
        } else {
            onChange && onChange(e.target.value)
        }
    }

    return (
        <div className={`form-check ${className}`}>
            <input className={`form-check-input ${classNameInput}`} type={type} value={value} onChange={handleChange} id={id}
                   checked={checked} disabled={disabled} name={name}/>
            {
                label && (<label className="form-check-label" htmlFor={id}>{label}</label>)
            }
        </div>
    )
}