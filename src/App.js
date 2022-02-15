import React from 'react'
// import PointBuySystem from './components/PointBuySystem'
// import Bonus from './components/Bonus'
import Chart from './components/Chart'
import Counter from './components/Counter'
import stats from './stats'

export default function App(){
    let availablePoints = 27
    // let stats = [8,8,8,8,8,8]

    const [squares, setSquares] = React.useState(stats)

    const squareElements = squares.map(square => (
        <Counter 
            key={square.id}
            value={square.value}
            stat={square.stat}

        />
    ))

    return(
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Welcome to the Point Buy App!</h1>
            <p>You have <b>{availablePoints}</b> points left to spend</p>
            <div className='d-flex'>
                {squareElements}
            </div>

            <div className='d-flex flex-row align-items-center'>
                
                <p className='flex-shrink-0 m-2'>Racial Bonus:</p>

                <select className="form-select m-2" aria-label="Default select example">
                    <option selected>Stat</option>
                    <option value="1">Strength</option>
                    <option value="2">Dexterity</option>
                    <option value="3">Constitution</option>
                    <option value="4">Intelligence</option>
                    <option value="5">Wisdom</option>
                    <option value="6">Charisma</option>
                </select>

                <div className="input-group m-2">
                    <span className="input-group-text" id="basic-addon1">+</span>
                    <input type="text" className="form-control" placeholder="Amount" aria-label="Amount" aria-describedby="basic-addon1" />
                </div>

            </div>
        </div>
    )
}