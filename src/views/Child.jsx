import { useEffect, useState, useRef } from "react";

const Child = ({count})=>{
    let val3= useRef(0);
    let [val, setVal] = useState(0);
    let a = 0;

    console.log("Rerendering", a, val3.current);

    return <div>
        Count: {count}
        Value: {val3.current}
        <button type="button" onClick={()=>{val3.current = val3.current + 1;a= a+1; console.log(val3.current,a)}} >Add with Render</button>
        <button type="button" onClick={()=>{setVal(val + 1)}} >Add</button>
    </div>
}


export default Child;