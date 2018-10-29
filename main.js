var bookData = [];
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
		oneBook.innerHTML = '<img src="' + data[i].portada + '"><p>' + data[i].titulo + '</p><p>' + data[i].descripcion + '<p><button type="button" onclick="">More Info</button>';
		
		createDiv.appendChild(oneBook);
	}
}

//function showDetails(data){
//	for (var i = 0; i < data.length; i++) {
//	var createDivHover = document.getElementById("book_list");
//	var oneBookHover = document.createElement("div");
//	oneBookHover.innerHTML = '<p>' + data[i].titulo + '</p><p>' + data[i].descripcion + '<p><button type="button" onclick="">More Info</button>';
//	createDivHover.appendChild(oneBookHover);
//}
//	console.log(oneBookHover);
//	}
	
//		var booksTitleList = document.getElementById('book_list');
//		var oneBook = document.createElement('div');
//		var oneBookTitle = document.createElement('p');
//		oneBookTitle.textContent = booksTitle[i];
//		var oneBookDetail = document.createElement('p');
//		oneBookDetail.textContent = oneBookDetail[i];
//		booksTitleList.appendChild(oneBook);
//		oneBook.appendChild(oneBookTitle);
//		oneBook.appendChild(oneBookTitle);