export default function TableHeader({columns}) {
    return (
        <tr>
            {
                columns.map((column, index) => {
                    return (
                        <th key={column.key}>{column.title}</th>
                    )
                })
            }

        </tr>
    )
}