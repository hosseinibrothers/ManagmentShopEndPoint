export default function Range({label, className, min, max, step, value, onChange, disabled}) {

    const handleChange = e => {
        onChange && onChange(e.target.value)
    }

    return (
        <>
            <label className="form-label">{label}</label>
            <input type="range" className={`form-range ${className}`} value={value} onChange={handleChange} min={min} disabled={disabled} max={max} step={step}/>
        </>
)
}