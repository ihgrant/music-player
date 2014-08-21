/**
 * @jsx React.DOM
 */

var FileBrowser = React.createClass({
	// propTypes: {
	// 	files: React.PropTypes.array
	// },
	render: function() {
		var files = null;
		// if (this.props.files) {
		// 	files = this.props.files
		// 	.map(function (file) {
		// 		return <li>{file}</li>;
		// 	}.bind(this));
		// }

		return (
			<div>
				<ul className="nostyle">
					{files}
				</ul>
				<button onClick={this.props.openDir}>Open Dir...</button>
			</div>
		);
	}

});
