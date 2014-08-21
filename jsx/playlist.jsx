/**
 * @jsx React.DOM
 */

var Playlist = React.createClass({
	displayName: 'Playlist',
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
			<ul className="nostyle">
				{files}
			</ul>
		);
	}

});
