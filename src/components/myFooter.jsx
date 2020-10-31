export const MyFooter = ({ setActiveForm }) => {
    return (
        <div className="mb-3 align-items-center">
            <div className="offset-11">
                <div
                    className="btn btn-danger btn-block"
                    onClick={() => setActiveForm({ activeButton: "" })}
                >
                    Close
                </div>
            </div>
        </div>
    );
};
