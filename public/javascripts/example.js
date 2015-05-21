var comment = React.createClass({
	render: function() {
		var rawMakrup = this.props.children.toString(), {sanitize: true});
		return (
			<div clasName="comment">
			<h2 clasName="commentAuthor">
				{this.props.author}
			</h2>
			<span dangerouslySetInnerHTML={{__html: rawMakrup}} />
			</div>
		);
	}
});