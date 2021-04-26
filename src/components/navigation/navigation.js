import React from 'react'

const navigation = ({ onRouteChange })=>{
	return(
		<div>
			<nav style={{display:'flex',justifyContent:'flex-end'}}>
				<p onClick={()=>onRouteChange('signin')}className='f3 link dim underline pa3 pointer '>Sign out</p>
			</nav>
		</div>
		);
}

export default navigation;