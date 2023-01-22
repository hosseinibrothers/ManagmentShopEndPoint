export default function Item({item, onClick, isSelected}) {
    const handleClick = () => {
        onClick(item);
    }

    return (
        <li className={isSelected ? "selected" : ""} onClick={handleClick}>
            <button role="option" className={`dropdown-item ${isSelected ? "selected" : ""}`} id="bs-select-3-0"
                    tabIndex="0"
                    aria-selected={isSelected} aria-setsize="3" aria-posinset="1">
                <span className="bx bx-check text-primary check-mark"></span>
                <span className="text">{item?.label}</span>
            </button>
        </li>
    )
}