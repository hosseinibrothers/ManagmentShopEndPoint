export default function FileInput({label, className, name, value, refFile, onChange, disabled = false}) {

    const handleChange = e => {
        onChange && onChange(e.target.files);
    }

    return (
        <>
            <label className="form-label">{label}</label>
            <input className={`form-control ${className}`} disabled={disabled} ref={refFile} onChange={handleChange} name={name} type="file"/>
        </>
    )
}