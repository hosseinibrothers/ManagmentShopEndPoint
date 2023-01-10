export default function Switch({label, checked, className, value, onChange, disabled, classNameInput, name, id}) {

    const handleChange = e => {
        onChange && onChange(e.target.checked)
    }

    return (
        <div className={`form-check form-switch ${className}`}>
            <input className={`form-check-input ${classNameInput}`} type="checkbox" id={id}
                   checked={checked} disabled={disabled} name={name} value={value} onChange={handleChange}/>
            {
                label && (<label className="form-check-label" htmlFor={id}>{label}</label>)
            }
        </div>
    )
}