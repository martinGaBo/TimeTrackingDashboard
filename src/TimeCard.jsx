import './TimeCard.css';

function TimeCard(props) {
    return (
        <div>
            <div className="">
                <div className="">
                    <div className="card icon p-1  rounded-4" style={{ backgroundColor: `${props.color}`, backgroundImage: `url(${props.imagen})` }}>

                    </div>
                    <div className="card fondo2 p-1 rounded-4 cardabajo1">
                        <div className="card-body">
                            <p className='text-white d-flex justify-content-start justify-content-between'>{props.activity} <i className="bi bi-three-dots text-white"></i></p>
                            <h1 className='text-white d-flex justify-content-start'>{props.activity2}</h1>
                            <p className='text-white-50 d-flex justify-content-start'>{props.activity3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeCard