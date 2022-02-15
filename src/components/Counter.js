import React from 'react'

export default function Counter(props){


    return(
        <div>
            <div className="card m-2">
                <div className="d-flex flex-column card-body p-3" style={{ position: 'relative' }}>
                    <div className="d-flex align-items-center justify-content-center">
                        <h3 className="text-center px-4">{`${props.value}`}</h3>
                        <button className="btn btn-sm" style={{ position: 'absolute', right: 10}}>+</button>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="text-center px-4">{`${props.stat}`}</div>
                        <button className="btn btn-sm" style={{ position: 'absolute', right: 10}}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}