onload = (() => {
	fetch('https://api.myjson.com/bins/udbm5', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(function (response) {
		return response.json();
	}).then(function (json) {
		console.log(json);
	}).catch(function (error) {
		console.log(error);
	});
})()

