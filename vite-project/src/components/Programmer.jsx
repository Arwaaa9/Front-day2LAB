/* eslint-disable react/prop-types */

function Programmer(props) {

    return (
      <div className='card'>
          <div className='card-head'>
              <h2>{props.name}</h2>
              <p>{props.years} years</p>
          </div>
          <h4>{props.company}</h4>
          <div className='lang-container'>
              {props.languages.map((element,index) => {
              return <div className='lang' key={index}>{element}</div>
          })} 
          </div>  
      </div>
    )
  }
  
  export default Programmer