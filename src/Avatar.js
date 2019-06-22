import React,{Component} from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';

class Avatar extends Component{

	constructor(){
		super();
		this.state = {
			name: 'Youtubers World'
		}
	}
	namechange(){
		const arr = ['Youtubers World','Welcome to Youtubers World :)']
		this.setState({
			name: arr[1]
		})
	}

	render(){

		const arraylist = [{
		id: 1,
		name:'Bhuvan',
		dialog:'Bhai ke izzat dubadi',
	},
	{
		id: 2,
		name:'Ashish',
		dialog:'Bijli ka bill tera baap bharega',
	},
	{
		id: 3,
		name:'Mr.Carry',
		dialog:'Toh kaise hai aap log',
	},
	{
		id: 4,
		name:'Gaurav Chaudhary',
		dialog:'Chaliye shuru karte hai',
	},
	]

	const card = arraylist.map((avtarcard, index) =>{
		return <Avatarlist key={index} id={arraylist[index].id}
							name={arraylist[index].name}
							dialog={arraylist[index].dialog}/>
	})

		return( <div className='mainpage tc'>
			<h1> {this.state.name} </h1>
			{card}
			<button className='button' onClick={ () => this.namechange()}> E N T E R </button>
			</div>
		)
	}
}

export default Avatar;