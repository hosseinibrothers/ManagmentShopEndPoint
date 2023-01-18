import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Pagination from "../Pagination";
import {useState} from "react";

export default function Table({columns, data, tableClassName, tHeadClassName}) {

    const [pageNumber, setPageNumber] = useState(1)
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
            <Pagination totalCount={100} pageSize={10} onPageChange={setPageNumber} currentPage={pageNumber}/>
        </div>
    )
}


// table className = [table-dark, table-striped, table-bordered, table-borderless, table-hover, table-sm, card-table]

// table header className = [table-dark, table-light]