import React,{useState} from "react"

const Counter = (props) => {
    let { value } = props
    const formatValue = () => {
        return value === 0 ? "empty" : value
    }
    const getBageClasses = () => {
        let classes = "badge m-2 " 
        classes+=props.value ===0? "bg-warning":"bg-primary"
        return classes
    }
    const handleIncrement = (pro) => {
        props.onIncrement(pro.id)
    }
    const handleDecrement = (pro) => {
        props.onDecrement(pro.id)
    }
    return (
        <div>
            <span>{props.name}</span>
            <span className={getBageClasses()}>{formatValue()}</span>
            <button className="btn btn-primary btn-sm m-2" onClick={()=>handleIncrement(props)} >+</button>
            <button className="btn btn-primary btn-sm m-2" onClick={()=>handleDecrement(props)} >-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={()=>props.onDelete(props.id)}> delete</button>
        </div>   
     )
}


export default Counter