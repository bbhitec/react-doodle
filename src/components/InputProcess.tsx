// [wiki] basic text input processing with React state

import { useState } from 'react'
import Button from './Button'

function InputProcess() {

    const [inputText, setInputText] = useState("ABCDDDEFG")
    const [outputText, setOutputText] = useState("Result string will show here")


    // text processing function (can be general or imported)
    function getLongestNonRepeating(str: string) {
        if (str.length == 1) return str;

        let longest = '';
        let validSubstr = '';
        let prev = '';

        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            if (validSubstr.includes(char)){
                // repeating char
                longest = (validSubstr.length > longest.length) ? validSubstr : longest;
                // consider step-back to previous char
                if (prev === char){
                    validSubstr = char;
                }
                else {
                    validSubstr = prev;
                    i--;
                }
            }
            else {
                // legal char
                validSubstr += char;
                prev = char;
            }
        }
        // must have one last check!
        longest = (validSubstr.length > longest.length) ? validSubstr : longest;
        return longest;
    }


    const processInput = () => {
        setOutputText(getLongestNonRepeating(inputText))
    }


    return (
        <>
            <h2>InputProcess</h2>
            <div className="mb-3">
                <label  className="form-label">Input textarea</label>
                {/* [demo] changing the input will update the input text(string) variable*/}
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Input text to test" value={inputText} onChange={(e) => setInputText(e.target.value)}></textarea>
            </div>
            {/* [demo] clicking the button will call the processing function to change output state*/}
            <Button onClick={processInput}>Process!</Button>
            <div className="mb-3">
                {/* this disabled text field will display the output state */}
                <label  className="form-label">Result</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={outputText} placeholder="Result text will show here" disabled></textarea>
            </div>
        </>
    )
}

export default InputProcess