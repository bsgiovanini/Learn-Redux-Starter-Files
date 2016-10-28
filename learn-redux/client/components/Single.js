import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component{



	render()  {

		const postId = this.props.params.postId
		const i = this.props.posts.findIndex((post) => post.code === postId);
		const post = this.props.posts[i];
		const postComments = this.props.comments[postId] || [];

		return (
			<div className="sigle-photo">
				<Photo i={i} post={post} {...this.props}></Photo>
				<Comments postComments={postComments} {...this.props}/>
			</div>
		)

	}
}

export default Single;