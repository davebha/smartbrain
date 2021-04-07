import React from 'react';


const ImageLinkForm =()=>{
	return(
		<div>
			<p className='f3'>
				{'This magical brain will detect faces in your photos.Give it a try!'}
			</p>
			<div >
				<input className='f4 pa2 w-70' type='text' />
				<button className='w-30 grow f4 ph3 pv2 dib white bg-light-purple'>Detect</button>
			</div>
		</div>
		);

}

export default ImageLinkForm;