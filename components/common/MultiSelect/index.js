import {useCallback, useEffect, useRef, useState} from "react";
import Item from "./Item";

export default function MultiSelect({label, options, values, placeholder, onChange, disabled}) {

    const [isOpen, setIsOpen] = useState(false);
    const multiSelectRef = useRef(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleCloseDropdown);

        return () => {
            document.removeEventListener("mousedown", handleCloseDropdown);
        }
    },[])


    const handleCloseDropdown = (event) => {
        if (multiSelectRef?.current && !multiSelectRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }

    const handleItems = item => {
        const indexItem = values.findIndex(value => value.value === item.value);

        if (indexItem === -1) {
            const tempValues = [...values];
            tempValues.push(item);
            onChange(tempValues)
        } else {
            const tempValues = [...values];
            tempValues.splice(indexItem, 1);
            onChange(tempValues);
        }
    }

    const handleSelectItem = useCallback((item) => {
        const indexItem = values.findIndex(value => value.value === item.value);

        return indexItem !== -1;

    },[values])

    return (
        <>
            <label className="form-label">{label}</label>
            <div className={`dropdown bootstrap-select show-tick w-100${disabled ? " disabled" : ""}`} ref={multiSelectRef}>
                <button type="button" tabIndex="-1" onClick={() => setIsOpen(prevState => !prevState)}
                        className={`btn dropdown-toggle btn-default bs-placeholder${isOpen ? " show" : ""}${disabled ? " disabled" : ""}`}
                        data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-3" aria-haspopup="listbox"
                        aria-expanded={isOpen} title={values?.length > 0 ? (
                    values.map(item => {
                        return `${item.label}، `
                    })
                ) : placeholder} data-id="selectpickerMultiple">
                    <div className="filter-option">
                        <div className="filter-option-inner">
                            <div className="filter-option-inner-inner">
                                {
                                    values?.length > 0 ? (
                                        values.map(item => {
                                            return `${item.label}، `
                                        })
                                    ) : placeholder
                                }
                            </div>
                        </div>
                    </div>
                </button>
                <div className={`dropdown-menu${isOpen ? " show" : ""}`}
                     style={{
                         maxHeight: "157.203px",
                         overflow: "hidden",
                         minHeight: "0px",
                         position: "absolute",
                         inset: "0px 0px auto auto",
                         margin: "0px",
                         transform: "translate(0px, 40px)"
                     }}
                     data-popper-placement="bottom-end">
                    <div className="inner show" role="listbox" id="bs-select-3" tabIndex="-1"
                         aria-multiselectable="true"
                         style={{maxHeight: "147.203px", overflow: "hidden auto", minHeight: "0px"}}>
                        <ul className="dropdown-menu inner show" role="presentation"
                            style={{marginTop: "0px", marginBottom: "0px"}}>

                            {
                                options && options?.length > 0 && options.map(item => {
                                    return (
                                        <Item item={item} onClick={handleItems} key={item.value} isSelected={handleSelectItem(item)} />
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}