import React, { useState } from 'react'

export const TextForm = () => {
    const [desc, setDesc] = useState("enter your desc");
    const handleUpClick = () => {
        console.log('uppercase was clicked '+desc);
        let newtext=desc.toUpperCase();
        setDesc(newtext);
    }
    const handleOnChange = (e) => {
        console.log('uppercase was clicked on change');
        setDesc(e.target.value);
        console.log(e.target.value);
    }
    
    // setDesc("your desc");
    return (
        <div className="container my-5">
            <div class="mb-3">
                <label for="textarea" class="form-label"><b>Description</b></label>
                <textarea class="form-control" onChange={handleOnChange} id="textarea" value={desc} rows={8} />
            </div>
            <button type="submit" onClick={handleUpClick} class="btn btn-success">Convert to Uppercase</button>

        </div>
    )
}
