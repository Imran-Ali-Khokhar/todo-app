import React from 'react'

function Todolist(props){
	return(
		<div className='todo-item'>
			<input type='checkbox'
				   checked={props.item.completed} 
				   onChange={() => props.handleChange(props.item.id)} 
			/>
			<span>{props.item.text}</span>
		</div>
		)
}

export default Todolist