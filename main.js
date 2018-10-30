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

//function showMoreImage(target,data){
//	var createDivPhoto = document.getElementById("photo_gallery");
//	createDivPhoto.innerHTML = "";
//	for (var i = 0; i < data.length; i++){
//		var oneImage = document.createElement("div");
//	
//		
//		oneImage.innerHTML = '<img src="' + data[i].detail + '" alt="book' + i + '">';
//		
//		createDivPhoto.appendChild(oneImage);
//	}
//	
//	
//	var pushedButton = target.value;
//	console.log(pushedButton);
//}




function showMoreImage(target, data) {
	var pushedButton = target.value;

	var createDivPhoto = document.getElementById("photo_gallery");

	

	function printImage(bookNumber) {
		createDivPhoto.innerHTML = "";
		var oneImage = document.createElement("div");
		oneImage.innerHTML = '<span class="close">&times;</span><span class="previous_cover">&#8592</span><img src="' + data[bookNumber].detail + '" alt="book' + bookNumber + '"><span class="next_cover">&#8594</span>';
		createDivPhoto.appendChild(oneImage);
	}
	printImage(pushedButton);

	console.log(pushedButton);

	var showCover = document.getElementById('photo_gallery');
	showCover.style.display = "block";
	var spanToClose = document.getElementsByClassName("close")[0];

	spanToClose.onclick = function () {

		showCover.style.display = "none";
	}

	var spanToPrevious = document.getElementsByClassName("previous_cover")[0];

	spanToPrevious.onclick = function () {
		var previous = pushedButton - 1
		printImage(previous);
	}

	var spanToNext = document.getElementsByClassName("next_cover")[0];

	spanToNext.onclick = function () {
		var next = pushedButton + 1
		printImage(next);

	}

}
