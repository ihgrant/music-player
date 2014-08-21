/**
 * @jsx React.DOM
 */

var FileBrowser = React.createClass({displayName: 'FileBrowser',
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
			React.DOM.div(null, 
				React.DOM.ul({className: "nostyle"}, 
					files
				), 
				React.DOM.button({onClick: this.props.openDir}, "Open Dir...")
			)
		);
	}

});

/**
 * @jsx React.DOM
 */

var Footer = React.createClass({displayName: 'Footer',

	render: function() {
		return (
			React.DOM.p(null, "Stopped.")
		);
	}

});

/**
 * @jsx React.DOM
 */

var PlayControls = React.createClass({displayName: 'PlayControls',
	render: function() {
		return (
			React.DOM.div({className: "playcontrols"}, 
				React.DOM.button({className: "btn-previous"}, "Previous"), 
				React.DOM.button({className: "btn-play"}, "Play"), 
				React.DOM.button({className: "btn-stop"}, "Stop"), 
				React.DOM.button({className: "btn-next"}, "Next"), 
				React.DOM.button({id: "btn-open", className: "btn-open"}, "Add Files...")
			)
		);
	}

});

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
			React.DOM.ul({className: "nostyle"}, 
				files
			)
		);
	}

});

/**
 * @jsx React.DOM
 */

var ReactGui = React.createClass({displayName: 'ReactGui',
	propTypes: {
		handlePrev: React.PropTypes.func,
		handlePlay: React.PropTypes.func,
		handlePause: React.PropTypes.func,
		handleStop: React.PropTypes.func,
		handleOpen: React.PropTypes.func,
		files: React.PropTypes.array
	},
	openDir: function () {
		var e = document.createEvent('MouseEvents'),
		el = document.getElementById('open');

		el.addEventListener('change', this.props.openDirectory);
		e.initMouseEvent('click');
		el.dispatchEvent(e);
	},
	render: function() {
		return (
			React.DOM.div(null, 
				React.DOM.div({className: "w-100"}, 
					PlayControls({openDir: this.openDir})
				), 
				React.DOM.div(null, 
					React.DOM.div({className: "w-20"}, FileBrowser({files: this.props.files, openDir: this.openDir})), 
					React.DOM.div({className: "w-80"}, Playlist(null))
				), 
				React.DOM.div({className: "w-100"}, Footer(null)), 
				React.DOM.input({id: "open", type: "file", className: "hidden", nwdirector: true, nwworkingdir: "~/Music"})
 			)
		);
	}

});
