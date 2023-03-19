import React,{useState} from "react";
import Counter from "./counter";

const CountersList = () => {
   
    const initialState = [
        { id: 0, value: 0, name: "Ненужная вещь"},
        { id: 1, value: 0, name: "Ложка"},
        { id: 2, value: 0, name: "Вилка" },
        { id: 3, value: 0, name: "Тарелка" },
        { id: 4, value: 0, name: "Набор минималиста" }        
    ]
    const updateState = [
        { id: 0, value: 1, name: "Ненужная вещь"},
        { id: 1, value: 5, name: "Ложка"},
        { id: 2, value: 45, name: "Вилка" },
        { id: 3, value: 8, name: "Тарелка" },
        { id: 4, value: 1, name: "Набор минималиста" }        
    ]
    const [counters,setCounters] = useState(initialState)
    const handleDelete = (id) => {
        const newCounters = counters.filter(count => count.id !== id) 
        setCounters(newCounters)
    }
    const onIncrement = (id) => {
        setCounters(
            counters.map((item) => {
                if (item.id === id) {
                    return { ...item, value: item.value + 1 };
                } else {
                return item;
                }
            })
        );
    }
    const onDecrement = (id) => {
        setCounters(
            counters.map((item) => {
                if (item.id === id) {
                    return { ...item, value: item.value - 1 };
                } else {
                    return item;
                }
            })
        );
    }
    const handleReset = () => {
        setCounters(initialState)
    }

    return <>
        {counters.map(count => <Counter
            key={count.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={handleDelete}
            {...count}
        />)}
        <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
    </>
} 
export default CountersList