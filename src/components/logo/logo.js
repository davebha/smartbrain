import React from 'react';
import Tilt from 'react-tilt'
import './logo.css'
import brain from './brain.png'

const logo =()=>{
	return(
		<div className='ma6 mt0'>
			<Tilt className="Tilt br2 shadow-2 " options={{ max : 55 }} style={{ height: 140, width: 140 }} >
 				<div className="Tilt-inner pa4"> <img src={brain} alt="logo" style={{paddingTop:'5px'}} />  </div>
			</Tilt>
		</div>
		);

}

export default logo;