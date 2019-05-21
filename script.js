"use strict";

const catApiURL = "https://api.thecatapi.com/v1/images/search";

const DOM = {
	resultsContainer: document.querySelector(".js-search_results"),
	searchBtn: document.querySelector(".js-search_btn")
}

const resultsModel = {
	init: function (data) {
		// this.status = data.url;
		this.url = data.url;
	}
};

DOM.searchBtn.addEventListener("click", e => {
	fetchData(catApiURL)
		// .then(res => {
		// 	res.status && res.status === "success" ? processResponse(res) : processError();
		// });
});

function fetchData(url) {
  return fetch(url)
	.then(res => {
    if(res.ok) {
      return res.json();
    }
  })
//   .catch(err => {
//     if(res.status !== "success") {
//       return res.status;
//     }
//   })
};

function processResponse(response) {
	const cat = Object.create(resultsModel);
	cat.init(response);

	generateImg(cat.url);
};

function processError() {
	DOM.resultsContainer.innerHTML = `<h2>An error occured while fetching the data</h2>`
}

function generateImg(url) {
	DOM.resultsContainer.innerHTML = `<img src="${url}" alt="Random cat image">`
};