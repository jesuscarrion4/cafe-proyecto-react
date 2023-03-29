import { useState } from "react";
import Button from 'react-bootstrap/Button';



const CountFuntion =({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)
    
    

    const decrement = () => {
        if (count > 0 ){
            setCount(count - 1)
        }
    }

    const increment =() => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    return(
        <>
        <div style={{display: 'flex'}}>
            <Button onClick={decrement} variant="dark">-</Button>{''}
            <h2>{count}</h2>
            <Button onClick={increment} variant="dark">+</Button>{' '}
        </div>
        <br/>
        <Button onClick={()=>onAdd(count)} variant="success">Lo quiero</Button>
        </>
    )
}

export default CountFuntion