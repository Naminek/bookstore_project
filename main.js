//this is my test comment
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


function makeBooksList(data) {
	for (var i = 0; i < data.length; i++) {
		var createDiv = document.getElementById("book_list");
		var oneBook = document.createElement("div");
		oneBook.innerHTML = '<img src="' + data[i].cover + '"><div class="caption"><p class="book_title">' + data[i].title + '</p><p class="book_detail text-justify">' + data[i].description + '<p><button type="button" class="more_info" value="' + i + '" onclick="showMoreImage(event.target, bookData)">More Info</button></div>';

		createDiv.appendChild(oneBook);
	}
}

function searchBooks(data) {
	var inputSearch = document.getElementById("book_search");
	var filterSearch = inputSearch.value.toUpperCase();
	var createDiv = document.getElementById("book_list");
	createDiv.innerHTML = "";
	var titleUppercaseArray = data.map(book => book.title);
	//	var noResultDiv = document.getElementById("no_result");
	//	noResultDiv.innerHTML = "";

	for (var i = 0; i < data.length; i++) {
		if (filterSearch == "") {
			var oneBook = document.createElement("div");
			oneBook.innerHTML = '<img src="' + data[i].cover + '"><div class="caption"><p class="book_title">' + data[i].title + '</p><p class="book_detail text-justify">' + data[i].description + '<p><button type="button" class="more_info" value="' + i + '" onclick="showMoreImage(event.target, bookData)">More Info</button></div>';

			createDiv.appendChild(oneBook);
		} else if (((data[i].title.toUpperCase()).indexOf(filterSearch) > -1) || ((data[i].description.toUpperCase()).indexOf(filterSearch) > -1)) {
			var oneBook = document.createElement("div");
			oneBook.innerHTML = '<img src="' + data[i].cover + '"><div class="caption"><p class="book_title">' + data[i].title + '</p><p class="book_detail text-justify">' + data[i].description + '<p><button type="button" class="more_info" value="' + i + '" onclick="showMoreImage(event.target, bookData)">More Info</button></div>';

			createDiv.appendChild(oneBook);
			//			} else if ((data[i].title.toUpperCase()).indexOf(filterSearch) == -1) {
			//				var noResult = document.createElement("p");
			//				noResult.innerHTML = 'No Result';
			//				noResultDiv.append(noResult);
		}
	}
}




function showMoreImage(target, data) {
	var pushedButton = parseInt(target.value);
	// ->	to parses a string argument and returns an integer of the specified radix
	console.log(pushedButton);

	var createDivPhoto = document.getElementById("photo_gallery");

	function printImage() {
		createDivPhoto.innerHTML = "";
		var oneImage = document.createElement("div");
		oneImage.innerHTML = '<span class="close">&times;</span><span class="previous_cover ml-3">&#60;</span><img src="' + data[pushedButton].detail + '" alt="book' + pushedButton + '"><span class="next_cover">&#62;</span>';
		createDivPhoto.appendChild(oneImage);

		var showCover = document.getElementById('photo_gallery');
		showCover.style.display = "block";
		var spanToClose = document.getElementsByClassName("close")[0];
		spanToClose.onclick = function () {
			showCover.style.display = "none";
		}

		var spanToPrevious = document.getElementsByClassName("previous_cover")[0];

		spanToPrevious.onclick = function () {
			if (pushedButton === 0) {
				pushedButton = 24
			} else {
				pushedButton = pushedButton - 1
			}
			printImage();
		}

		var spanToNext = document.getElementsByClassName("next_cover")[0];

		spanToNext.onclick = function () {
			if (pushedButton === 24) {
				pushedButton = 0
			} else {
				pushedButton = pushedButton + 1
			}
			printImage();
		}
	}
	printImage();

}
