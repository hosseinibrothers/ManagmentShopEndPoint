import {useEffect, useRef, useState} from "react";
import Item from "./Item";

export default function Select({label, placeholder, options, value, onChange}) {

    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null)

    useEffect(() => {
        document.addEventListener('mousedown', handleSelectIsOpen);

        return () => {
            document.removeEventListener('mousedown', handleSelectIsOpen);
        };
    }, [])

    const handleSelectIsOpen = (e) => {
        if (selectRef?.current && !selectRef.current.contains(e.target)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        setIsOpen(false)
    }, [value])

    return (
        <div className="form-select-wrapper position-relative" ref={selectRef}>
            <label className="form-label">{label}</label>
            <div className={`form-select ${isOpen ? "list-open" : ""}`} onClick={() => setIsOpen(prevState => !prevState)}>
                <span>{value ? value?.label : placeholder}</span>
            </div>
            <ul className={`form-select-options pe-0 ${isOpen ? "is-open" : ""}`}>
                {
                    options && options.map(item => {
                        return (
                            <Item item={item} onClick={onChange}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}