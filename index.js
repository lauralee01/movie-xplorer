let results = "";
const app = document.getElementById("app");
const ul = document.getElementById("listshows")

function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

fetch("https://api.themoviedb.org/3/tv/popular?api_key=a4d9ad8d2d072c50dc998cc0d1a508fa&language=en-US&page=1")
	.then((response) => response.json())
	.then((data) => {
		let tvshows = data.results;
		console.log(tvshows);
		return tvshows.map((tvshow) => {
			let li = createNode('li'),
			a = createNode('a');
			a.innerHTML = tvshow.original_name;
			append(li, a);
			append(ul, li);
		})

	})