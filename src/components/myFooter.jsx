export const MyFooter = ({ setActiveForm, setShowModalClose }) => {
    return (
        <div className="mb-3 align-items-center">
            <div className="offset-11">
                <div
                    className="btn btn-danger btn-block"
                    onClick={() => setShowModalClose(true)}
                >
                    Close
                </div>
            </div>
        </div>
    );
};
