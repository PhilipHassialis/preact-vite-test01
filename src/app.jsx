import { useState, useMemo } from "preact/hooks";
import { MyHeader } from "./components/myHeader.jsx";
import { MyFooter } from "./components/myFooter.jsx";
import { ModalConfirmation } from "./components/modalConfirmation.jsx";

export const App = (props) => {
    let [counter, setCounter] = useState(0);
    let [textForReversal, setTextForReversal] = useState("");
    let [activeForm, setActiveForm] = useState({
        activeButton: "",
    });
    let [showModalClose, setShowModalClose] = useState(false);

    const reversedText = textForReversal.split("").reverse().join("");
    const restart = () => {
        setShowModalClose(false);
        setActiveForm({ activeButton: "" });
    };

    return (
        <>
            <MyHeader activeForm={activeForm} setActiveForm={setActiveForm} />
            <div class="container-sm  col-md-6 col-md-offset-3 p-2">
                <form>
                    <div class="mb-3">
                        <label for="straightForwardName" class="form-label">
                            Εισάγετε όνομα:
                        </label>
                        <input
                            id="straightForwardName"
                            class="form-control"
                            placeholder="γράψτε κάτι..."
                            onChange={(e) => {
                                setTextForReversal(e.target.value);
                            }}
                            onKeyDown={(e) => {
                                setTextForReversal(e.target.value);
                            }}
                            onKeyUp={(e) => {
                                setTextForReversal(e.target.value);
                            }}
                        ></input>
                    </div>
                    <div class="mb-3">
                        <label for="reversedName" class="form-label">
                            Ανστροφή:
                        </label>
                        <input
                            id="reversedName"
                            class="form-control"
                            value={reversedText}
                            readOnly="readOnly"
                        ></input>
                    </div>
                    <div class="mb-3">
                        <label for="counterValue" class="form-label">
                            Μετρητής:
                        </label>
                        <input
                            class="form-control mb-2"
                            id="counterValue"
                            value={counter}
                            readOnly="readOnly"
                        ></input>
                        <div
                            class="btn btn-primary mr-2"
                            onClick={(e) => setCounter(++counter)}
                        >
                            Επαύξησις
                        </div>
                        <div
                            class="btn btn-warning"
                            onClick={(e) => setCounter(--counter)}
                        >
                            Προσμείωσις
                        </div>
                    </div>
                </form>
                {activeForm.activeButton && (
                    <MyFooter
                        setActiveForm={setActiveForm}
                        setShowModalClose={setShowModalClose}
                    />
                )}
                {showModalClose && (
                    <ModalConfirmation
                        modalTitle="Process close"
                        modalMessage="Changes in the form will be lost. Proceed?"
                        okMessage="Lose changes"
                        cancelMessage="Cancel"
                        setShowModalClose={setShowModalClose}
                        restart={restart}
                    />
                )}
            </div>
        </>
    );
};
