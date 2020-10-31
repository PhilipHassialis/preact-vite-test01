import { useState } from "preact/hooks";

export const MyHeader = (props) => {
    let [showForecast, setShowForecast] = useState(false);
    let { activeButton } = props.activeForm;
    let setActiveForm = props.setActiveForm;

    console.log(props);
    console.log(activeButton);

    return (
        <div className="container-sm col-md-6 col-md-offset-3 p-2 align-items-center text-center">
            <div className="row text-center align-items-center mb-3">
                <h2 className="text-primary">
                    Δοκιμαστικός Header
                    {activeButton ? ` - ${activeButton}` : ``}
                </h2>
            </div>
            <div className="row">
                <div className="col-sm ">
                    <button
                        className="btn btn-lg btn-primary btn-block"
                        disabled={activeButton && activeButton != "Create"}
                        onClick={() =>
                            setActiveForm({ activeButton: "Create" })
                        }
                    >
                        Create
                    </button>
                </div>
                <div className="col-sm ">
                    <button
                        className="btn btn-lg btn-success btn-block"
                        disabled={activeButton && activeButton != "Modify"}
                        onClick={() =>
                            setActiveForm({ activeButton: "Modify" })
                        }
                    >
                        Modify
                    </button>
                </div>
                <div className="col-sm">
                    <button
                        className="btn btn-lg btn-danger btn-block"
                        disabled={activeButton && activeButton != "Track"}
                        onClick={() => setActiveForm({ activeButton: "Track" })}
                    >
                        Track
                    </button>
                </div>
                <div className="col-sm">
                    <button
                        className="btn btn-lg btn-warning btn-block"
                        disabled={activeButton && activeButton != "Withdraw"}
                        onClick={() =>
                            setActiveForm({ activeButton: "Withdraw" })
                        }
                    >
                        Withdraw
                    </button>
                </div>
                <div className="col-sm">
                    <button
                        className="btn btn-lg btn-secondary btn-block"
                        onMouseEnter={() => setShowForecast(true)}
                        onMouseLeave={() => setShowForecast(false)}
                    >
                        Forecast
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col align-items-center">
                    <div
                        style={{
                            display: showForecast ? "block" : "none",
                            position: "absolute",
                        }}
                        className="text-primary font-italic font-weight-bold text-center"
                    >
                        Coming Soon
                    </div>
                </div>
            </div>
        </div>
    );
};
