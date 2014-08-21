'use strict';

var fs = require('fs');
var find = require('findit');
var mm = require('musicmetadata');

// function clickInput(id) {
// 	var e = document.createEvent('MouseEvents'),
// 	el = document.getElementById(id);

// 	el.addEventListener('change', function (e) {
// 		getFiles(this.value, function (err, files) {
// 			if (err) console.log(err);
// 			console.log(files);
// 			// ui.renderPlaylist(files, document.getElementByClassName('playlist')[0]);
// 		});
// 	});
// 	e.initMouseEvent('click');
// 	el.dispatchEvent(e);
// }

var getFiles = function (dir, callback) {
	var finder = find(dir, null),
	files = [],
	cover = '';

	finder.on('file', function (file, stat) {
		if (isMusic(file)) {
			getFileInfo(file, function (err, file) {
				if (err) console.log(err);
				files.push(file);
			});
		} else if (isCoverImage(file)) {
			cover = file;
		}
	});
	finder.on('end', function () {
		console.log('done!');
		callback(null, files);
	});
	finder.on('error', function (err) {
		callback(err, files);
	});
};

var getFileInfo = function (file, callback) {
	var parser = mm(fs.createReadStream(file));
	parser.on('metadata', function (result) {
		callback(null, {file: file, info: result});
	});
	parser.on('done', function (err) {
		if (err) callback(err);
		// stream.destroy();
	});
};

var isMusic = function (filename) {
	var a = filename.split('.'),
	ext = a[a.length-1],
	valid = [
		'mp3',
		'wav'
	];
	return (valid.indexOf(ext) !== -1);
};

var isCoverImage = function (filename) {
	var a = filename.split('.'),
	ext = a[a.length-1],
	valid = [
		'jpg',
		'png'
	];
	return (valid.indexOf(ext) !== -1);
};
