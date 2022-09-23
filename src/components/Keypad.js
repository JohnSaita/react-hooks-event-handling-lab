import React from "react";

function Keypad() {
    function handleChange(e){
         console.log('Entering password...');
    }
    return (
        <div>
            <input type="password"
                onChange={handleChange}
                placeholder='password...'>

            </input>
        </div>
    )
}

export default Keypad;