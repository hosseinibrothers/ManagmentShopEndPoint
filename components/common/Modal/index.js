export default function Modal({isOpen, onClose, modalTitle, children, labelCloseBtn, labelSubmitBtn}) {

    const handleClose = () => {
        onClose(false)
    }

    return (
        <>
            <div className={`modal fade ${isOpen ? "show" : ""}`} style={{display: isOpen ? "block" : "none"}}
                 id="modalTop" tabIndex="-1" aria-hidden={!isOpen} aria-modal={isOpen}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title secondary-font" id="modalCenterTitle">{modalTitle}</h5>
                            <button type="button" onClick={handleClose} className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-label-secondary" onClick={handleClose}
                                    data-bs-dismiss="modal">
                                {labelCloseBtn}
                            </button>
                            <button type="button" className="btn btn-primary"
                                    onClick={handleClose}>{labelSubmitBtn}</button>
                        </div>
                    </div>
                </div>
            </div>

            {
                isOpen && <div className={`modal-backdrop fade ${isOpen ? "show" : ""}`}></div>
            }
        </>

    )
}