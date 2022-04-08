import React from 'react'

export default function Results(props){
    return(
        <div className='d-flex'>

            <div className="card m-2">
                <div className="d-flex flex-column card-body p-2" style={{ position: 'relative' }}>
                    <div className="d-flex align-items-center justify-content-center">
                        <h4 className="text-center px-3">{props.statTotal}</h4>
                        
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="text-center px-3">{props.statName}</div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}