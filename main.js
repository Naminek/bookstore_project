var bookData = [];
onload = (() => {

	fetch('https://api.myjson.com/bins/zyv02', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(function (response) {
		return response.json();
	}).then(function (json) {
		console.log(json);
		bookData = json.books;
		//makeBooksList(json);
		console.log(bookData.length);
		makeBooksList(bookData);
	}).catch(function (error) {
		console.log(error);
	});
})()


console.log(bookData)

function makeBooksList(data) {
	for (var i = 0; i < data.length; i++) {
		var createDiv = document.getElementById("book_list");
		var oneBook = document.createElement("div");
		oneBook.innerHTML = '<img src="' + data[i].cover + '"><div class="caption"><p>' + data[i].title + '</p><p>' + data[i].description + '<p><button type="button" onclick="">More Info</button></div>';

		createDiv.appendChild(oneBook);
	}
}

function searchBooks(data) {
	var inputSearch = document.getElementById("book_search");
	var filterSearch = inputSearch.value.toUpperCase();
	var createDiv = document.getElementById("book_list");
	createDiv.innerHTML = "";
	var noResultDiv = document.getElementById("no_result");
	noResultDiv.innerHTML = "";
	for (var i = 0; i < data.length; i++) {
		if (filterSearch == "") {
			var oneBook = document.createElement("div");
			oneBook.innerHTML = '<div class="book_image"><img src="' + data[i].cover + '"></div><div class="caption"><p>' + data[i].title + '</p><p>' + data[i].description + '<p><button type="button" onclick="">More Info</button></div>';

			createDiv.appendChild(oneBook);
		} else if ((data[i].title.toUpperCase()).indexOf(filterSearch) > -1) {
			var oneBook = document.createElement("div");
			oneBook.innerHTML = '<img src="' + data[i].cover + '"><p>' + data[i].title + '</p><p>' + data[i].description + '<p><button type="button" onclick="">More Info</button>';

			createDiv.appendChild(oneBook);
		} else if ((data[i].title.toUpperCase()).indexOf(filterSearch) == -1) {
			var noResult = document.createElement("p");
			noResult.innerHTML = 'No Result';
			noResultDiv.append(noResult);
		}
	}

}
