import React from 'react';

const Avatarlist = (props) =>{
	return <div className="ma4 bg-light-purple dib shadow-4 pd4 grow">
				<img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
					<h2 className='heading'> {props.name} </h2>
					<p> {props.dialog} </p>
					<button className='btn'> Subscribe </button>
			</div>
}

export default Avatarlist;