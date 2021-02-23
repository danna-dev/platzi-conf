import React from 'react';
import ReactDOM from 'react-dom';

import './styles/BadgeDetails.css'
import { Link } from 'react-router-dom'
import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'
import confLogo from '../images/platziconf-logo.svg';

//HOOK PERSONALIZADO: debe iniciar con use y no se debe definir en un if
function useIncreaseCount(max) {
    const [count, setCount] = React.useState(0);

    if (count > max) {
        setCount(0);
    }
    return [count, setCount];
}
function BadgeDetails(props) {
    //USANDO HOOK PERSONALIZADO
    const [count, setCount] = useIncreaseCount(4);

    //USaNDO HOOK DE REACT
    //state, setState....con esto se consiga usar estado en un componente funcional
    //const [count, setCount] = React.useState(0);//0 es el valo por el q empezare el count

    return (
        <>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{props.badge.firstName} {props.badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge firstName={props.badge.firstName} lastName={props.badge.lastName} email={props.badge.email} jobTitle={props.badge.firstName} />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <button onClick={() => {
                                setCount(count + 1);
                            }} className="btn btn-primary mr-4">
                                Increase count:{count}
                            </button>
                            <Link className="btn btn-primary mb-4" to={`/badges/${props.badge.id}/edit`}>
                                Edit
                                </Link>
                        </div>
                        <button onClick={props.onOpenModal} className="btn btn-danger">
                            delete
                        </button>
                        <DeleteBadgeModal
                            isOpen={props.modalIsOpen}
                            onClose={props.onCloseModal}
                            onDeleteBadge={props.onDeleteBadge} />
                    </div>
                </div>
            </div>
        </>
    );

}

export default BadgeDetails;