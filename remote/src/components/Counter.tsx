import React,{ useState } from "react"
const Counter=()=>{
    const [count,setCount] = useState(0);

    return(
        <div>
            <h3>Counter Component:  Count is {count?count:0}</h3>
            <button onClick={()=>setCount(count+1)}>Press Me</button>
        </div>
    )
}

export default Counter