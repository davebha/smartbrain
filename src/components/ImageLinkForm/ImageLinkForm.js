import React from 'react';


const ImageLinkForm =()=>{
	return(
		<div>
			<p>
				{'This magical brain will detect faces in your photos.Give it a try!'}
			</p>
			<div className='bgCenter'>
				<input type='text' />
				<button>Detect</button>
			</div>
		</div>
		);

}

export default ImageLinkForm;