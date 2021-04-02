import React from 'react';
import Tilt from 'react-tilt'
import './logo.css'

const logo =()=>{
	return(
		<div className='ma6 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner"> 
 				<img src="brain.png" alt="logo" style={{padding-top:'55px'}} </div>
			</Tilt>
		</div>
		);

}

export default logo;