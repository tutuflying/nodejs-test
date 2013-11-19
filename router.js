function route(handle, pathname) {
	if (typeof handle[pathname] === 'function') {
		handle[pathname]();
	} else {
		console.log("no function");
	}
}

exports.route = route;