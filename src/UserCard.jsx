import './UserCard.css';

function UserCard(props) {
    return (
        <div>
            <div className="col">


                <div className="card fondo1 px-2 rounded-4">
                    <div className="card-body">

                        <img className='imagen border rounded-circle mt-2 mb-4' src={`${props.imagenp}`} />

                        <p className='text-white-50 d-flex justify-content-start mb-1'>{props.report}</p>
                        <h1 className='text-white fs-1 text d-flex justify-content-start'>{props.name}</h1>
                        <h1 className='text-white fs-1 text mb-5 d-flex justify-content-start'>{props.name2}</h1>

                    </div>
                </div>

                <div className="card fondo2 px-2 pt-2 rounded-4 cardabajo2">
                    <div className="card-body">
                        <p className='text-white-50 d-flex justify-content-start'>Daily</p>
                        <p className='text-white-50 d-flex justify-content-start'>Weekly</p>
                        <p className='text-white-50 d-flex justify-content-start'>Monthly</p>
                    </div>
                </div>
            </  div>
        </div>
    )
}

export default UserCard