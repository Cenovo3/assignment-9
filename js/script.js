console.log("script.js loaded");
const apiKey = "UZOgvXXXocPhQV7P9XI7cxjpYGX5HGtD";

const button = document.querySelector("#fetch-gif-btn");
const input = document.querySelector("#search-input");
const container = document.getElementById("gif-container");

// click event
button.addEventListener("click", fetchGifs);

// ✅ BONUS goes RIGHT HERE
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    fetchGifs();
  }
});

async function fetchGifs() {
  try {
    const searchTerm = input.value;

    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=25&rating=g`;

    const response = await fetch(endpoint);
    const data = await response.json();

    const images = data.data.map(gif => gif.images.original.url);

    console.log(images);

    container.innerHTML = "";

    images.forEach(url => {
      const img = document.createElement("img");
      img.src = url;
      img.classList.add("col-md-4", "mb-3");

      container.appendChild(img);
    });

  } catch (error) {
    console.error("Error:", error);
  }
}