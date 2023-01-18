import TableRowCell from "./TableRowCell";

export default function TableRow({columns, data}) {
    return (
        data.map((item, index) => {
            return (
                <tr key={`table-row-${item.id}`}>
                    {
                        columns.map((column, index) => {
                            return (
                                <TableRowCell item={item} column={column} key={`table-row-cell-${index}-${item.id}`}/>
                            )
                        })
                    }
                </tr>
            )
        })

    )
}