

export const ItemCount = ({max, min=0, counter, setCounter}) => {

    const handleSumar= () => {
        counter < max && setCounter(counter + 1)
    }

    const handleRestar= () => {
        counter > min && setCounter(counter - 1)
    }

    return (
        <div> 
            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span className="mx-3">{counter}</span>
            <button onClick={handleSumar} className="btn btn-primary">+</button>
        </div>
    )
}