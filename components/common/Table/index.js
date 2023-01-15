import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function Table({columns, data, tableClassName, tHeadClassName}) {
    return (
        <div className="table-responsive text-nowrap">
            <table className={`table ${tableClassName}`}>
                <thead className={tHeadClassName}>
                    <TableHeader columns={columns} />
                </thead>
                <tbody className="table-border-bottom-0">
                    <TableRow data={data} columns={columns}/>
                </tbody>
            </table>
        </div>
    )
}


// table className = [table-dark, table-striped, table-bordered, table-borderless, table-hover, table-sm, card-table]

// table header className = [table-dark, table-light]