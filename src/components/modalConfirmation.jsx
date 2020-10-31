export const ModalConfirmation = (props) => {
    return (
        <>
            <div
                class="modal show"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-modal="true"
                role="dialog"
                style={{ display: "block" }}
            >
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                {props.modalTitle}
                            </h5>
                        </div>
                        <div class="modal-body">{props.modalMessage}</div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-primary"
                                onClick={() => props.restart()}
                            >
                                {props.okMessage}
                            </button>
                            <button
                                type="button"
                                class="btn btn-danger"
                                onClick={() => props.setShowModalClose(false)}
                            >
                                {props.cancelMessage}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop fade show" id="backdrop"></div>
        </>
    );
};
