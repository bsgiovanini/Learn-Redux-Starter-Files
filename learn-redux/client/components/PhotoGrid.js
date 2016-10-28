import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
	render() {
		return (
			<div className="photo-grid">
				{this.props.posts.map((post, i) => <Photo key={i} {...this.props} post={post} i={i}></Photo>)}
			</div>
		)

	}
})

export default PhotoGrid;