import { useState, useMemo } from "preact/hooks";
import { MyHeader } from "./components/myheader.jsx";

export const App = (props) => {
    let [counter, setCounter] = useState(0);
    let [textForReversal, setTextForReversal] = useState("");

    const reversedText = textForReversal.split("").reverse().join("");

    return (
        <>
            <MyHeader />
            <div class="container-sm col-md-6 col-md-offset-3 p-2">
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
            </div>
        </>
    );
};
