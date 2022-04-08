import React from 'react'
import Chart from './components/Chart'
import Counter from './components/Counter'
import stats from './stats'
import Results from './components/Results'
import './style.css'

export default function App(){
    const [squares, setSquares] = React.useState(stats)
    const [availablePoints, setAvailablePoints] = React.useState(27)
    const [inputData, setInputData] = React.useState(
        {
            STR: 0,
            DEX: 0,
            CON: 0,
            INT: 0,
            WIS: 0,
            CHA: 0,
        }
    )
    
    function increment(id){
        if(availablePoints === 0){
            return
        }
        const newSquares = squares.map((square) => {
            return square.id === id && square.value < 15 ? {...square, value: square.value + 1} : square
        })

        setSquares(prevSquares => newSquares)
        
        setAvailablePoints(27 - calculateTotal(newSquares))
    }

    function decrement(id){

        const newSquares = squares.map((square) => {
            return square.id === id && square.value > 8 ? {...square, value: square.value - 1} : square
        })

        setSquares(prevSquares => newSquares)

        setAvailablePoints(27 - calculateTotal(newSquares))
    }

    function calculateTotal(newSquares) {
        let total = 0
        newSquares.map((square) => {
            total += calculateCost(square.value)
        })
        return total
    }


    function calculateCost(value) {
        let cost
        if(value < 14){
            cost = value - 8
        }
        else if(value === 14){
            cost = value - 7
        } else {
            cost = value - 6
        }
        return cost
    }

    const squareElements = squares.map(square => (
        <Counter 
            key={square.id}
            id={square.id}
            value={square.value}
            stat={square.stat}
            increment={increment}
            decrement={decrement}

        />
    ))

  

    const finalResults = squares.map(square => (
        <Results 
            key = {square.stat}
            statName = {square.stat}
            statTotal = {square.value + inputData[square.stat]}
        />
    ))

    function handleChange(event){
        setInputData(prevInputData => {
            return {
                ...prevInputData,
                [event.target.name]: parseInt(event.target.value) || 0
            }
        })
    }

    


    return(
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Welcome to the Point Buy App!</h1>
            <p>You have <b>{availablePoints}</b> points left to spend</p>
            <div className='d-flex'>
                {squareElements}
            </div>

                <p className='flex-shrink-0 m-2'>Racial Bonus:</p>
            <div className='d-flex flex-row m-2'>
                
                <form className='d-flex flex-column'>
                    <div className='d-flex  justify-content-end'>
                        <label htmlFor='STR'>STR</label>
                        <input
                            type="number"
                            onChange={handleChange}
                            name="STR"
                            id='STR'
                            
                        />
                    </div>
                    <div className='d-flex justify-content-end'>
                        <label htmlFor='DEX'>DEX</label>
                        <input
                            type="number"
                            id="DEX"
                            onChange={handleChange}
                            name="DEX"
                            />
                    </div>
                    <div className='d-flex justify-content-end'>
                        <label htmlFor='CON'>CON</label>
                        <input
                            type="number"
                            id="CON"
                            onChange={handleChange}
                            name="CON"
                            />
                    </div>
                </form>
                <form className='d-flex flex-column'>
                    <div className='d-flex justify-content-end'>
                        <label htmlFor='INT'>INT</label>
                        <input
                            type="number"
                            id="INT"
                            onChange={handleChange}
                            name="INT"
                            />
                    </div>
                    <div className='d-flex justify-content-end'>
                        <label htmlFor='WIS'>WIS</label>
                        <input
                            type="number"
                            id="WIS"
                            onChange={handleChange}
                            name="WIS"
                            />
                    </div>
                    <div className='d-flex justify-content-end'>
                        <label htmlFor='CHA'>CHA</label>
                        <input
                            type="number"
                            id="CHA"
                            onChange={handleChange}
                            name="CHA"
                            />
                    </div>
                </form>
            
            </div>
            <p className='flex-shrink-0 m-2'>Final Results:</p>
            <div className='d-flex justify-content-between'>
                {finalResults}
            </div>
        </div>
    )
}