import { useState } from "react";

function useToggle(val) {
    const [value, setValue] = useState(val);
    function toggleValue(val) {
        console.log(val)
        if (typeof val != "boolean") {
            setValue(!value);
        }
        else {
            setValue(val)
        }
    }
    return [value, toggleValue]
}
export default useToggle;