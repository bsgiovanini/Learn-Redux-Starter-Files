import React from 'react';


class Comments extends React.Component {

	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		//this.removeComment = this.removeComment.bind(this);
	}

	removeComment(index) {
		const {postId} =  this.props.params;
		this.props.removeComment(postId, index);
	}

	renderComment(comment, i) {
		return (
			<div className="comment" key={i} >
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button className="remove-comment" onClick={() => this.removeComment(i)}>&times;</button>
				</p>
				
			</div>
			)
	};

	handleSubmit(e) {
		e.preventDefault();
		const {postId} =  this.props.params;
		const author = this.author.value;
		const comment = this.comment.value;
		this.props.addComment(postId, author, comment);
		this.refs.commentForm.reset();

	};

	render() {
		return (
			<div className="comments">
				{this.props.postComments.map((comment, i) => this.renderComment(comment,i))}
				<form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
					<input type="text" ref={(author)=> this.author = author}  placeholder="author" />
					<input type="text" ref={(comment)=> this.comment = comment} placeholder="comment" />
					<input type="submit" hidden/>

				</form>
			</div>
		)

	}
}

export default Comments;