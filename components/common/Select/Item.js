export default function Item({item, onClick}) {

    const handleClick = () => {
        onClick && onClick(item);
    }

    return (
        <li value={item.value} onClick={handleClick} className="form-select-option ">
            {item.label}
        </li>
    )
}