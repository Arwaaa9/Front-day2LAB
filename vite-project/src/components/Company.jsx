/* eslint-disable react/prop-types */
import Services from "./Services"

function Company(props) {
  return (
    <div className='card'>
        <div className="center">
            <img src={props.path} alt="" height="150px" width="150px"/>
        </div>
        <div className='card-head'>
            <h2>{props.name}</h2>
            <p>Established at {props.years}</p>
        </div>
        <h4>Number of employees: {props.employees}</h4>
        <div>
            <Services serviceName={props.serviceName} servicePrice={props.servicePrice}/>
        </div>
    </div>
    )
}

export default Company