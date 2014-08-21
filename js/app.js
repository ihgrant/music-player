var onPrev = function () {
	console.log('onPrev');
};

var App = (function () {
	return {
		initialise: function () {
			console.log('hi');
			React.renderComponent(
				ReactGui({openDirectory: App.openDirectory}),
				document.body
			);
		},
		openDirectory: function (e) {
			var location = e.target.value;

			getFiles(location, function (err, files) {
				if (err) console.log(err);
				console.log(files);
				// ui.renderPlaylist(files, document.getElementByClassName('playlist')[0]);
			});
		}
	};
})();
