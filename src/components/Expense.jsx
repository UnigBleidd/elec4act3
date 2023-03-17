import React from 'react'

const Expense = (props) => {
    const handleClick = () => {
        alert('You clicked ' + props.name + " - " + "Php " + props.price)
    }
  return (
    <div className='box' onClick={handleClick}>
        <div>
            <b>{props.name}</b>
        </div>
        <div>
            <b>Php </b>{props.price}
        </div>
    </div>
  )
}

export default Expense