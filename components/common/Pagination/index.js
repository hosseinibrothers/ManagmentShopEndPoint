import {DOTS, usePagination} from "../../../utils/usePagination";

let siblingCount = 1;

export default function Pagination({totalCount, pageSize, onPageChange, currentPage}) {

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    return (
        <div className="row mx-2">
            <div className="col-sm-12 col-md-6">
                <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">نمایش {(currentPage - 1) * pageSize} {" "}
                    تا {currentPage * pageSize} از {totalCount} ردیف
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <div className="dataTables_paginate paging_simple_numbers d-flex justify-content-end" id="DataTables_Table_0_paginate">
                    <ul className="pagination">


                        <li className={`"paginate_button page-item previous ${currentPage === 1 ? "disabled" : ""}`} onClick={onPrevious}>
                            <span className="page-link cursor-pointer">قبلی</span>
                        </li>

                        {
                            paginationRange.map(pageNumber => {
                                if (pageNumber === DOTS) {
                                    return (<li className="paginate_button page-item prev">
                                        <span className="page-link cursor-pointer">&#8230;</span>
                                    </li>)
                                }


                                return (
                                    <li className={`paginate_button page-item prev ${pageNumber === currentPage ? "active" : ""}`} onClick={() => onPageChange(pageNumber)}>
                                        <span className="page-link cursor-pointer">{pageNumber}</span>
                                    </li>
                                )
                            })
                        }

                        <li className={`paginate_button page-item next ${currentPage === lastPage ? "disabled" : ""}`} onClick={onNext}>
                            <span className="page-link cursor-pointer">بعدی</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}