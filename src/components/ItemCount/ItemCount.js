

export const ItemCount = ({max, min=0, counter, setCounter}) => {

    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }

    const handleRestar = () => {
        counter > min && setCounter(counter - 1)
    }

    return (
        <div> 
            <button style={{ marginLeft:'70px' }} onClick={handleRestar} className="my-button">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={handleSumar} className="my-button mx-1">+</button>
        </div>
    )
}