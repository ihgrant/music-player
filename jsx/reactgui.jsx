/**
 * @jsx React.DOM
 */

var ReactGui = React.createClass({
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
			<div>
				<div className="w-100">
					<PlayControls openDir={this.openDir}/>
				</div>
				<div>
					<div className="w-20"><FileBrowser files={this.props.files} openDir={this.openDir}/></div>
					<div className="w-80"><Playlist/></div>
				</div>
				<div className="w-100"><Footer/></div>
				<input id="open" type="file" className="hidden" nwdirector={true} nwworkingdir="~/Music"/>
 			</div>
		);
	}

});
