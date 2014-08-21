/**
 * @jsx React.DOM
 */

var PlayControls = React.createClass({
	render: function() {
		return (
			<div className="playcontrols">
				<button className="btn-previous">Previous</button>
				<button className="btn-play">Play</button>
				<button className="btn-stop">Stop</button>
				<button className="btn-next">Next</button>
				<button id="btn-open" className="btn-open">Add Files...</button>
			</div>
		);
	}

});
