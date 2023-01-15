import {get} from "lodash";
export default function TableRowCell({item, column}) {
    const value = get(item, column.key);
    return (
        <td>
            {column.render ? column.render(column, item) : value}
        </td>
    )
}