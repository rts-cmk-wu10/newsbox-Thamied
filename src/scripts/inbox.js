export default (function () {

  if (!window.location.pathname.includes("index.html")) return

// Function to fetch data from the API and update headlines and descriptions
(function () {
  const categories = [
    "arts",
    "automobiles",
    "books",
    "business",
    "fashion",
    "food",
    "health",
    "home",
    "insider",
    "magazine",
    "movies",
    "nyregion",
    "obituaries",
    "opinion",
    "politics",
    "realestate",
    "science",
    "sundayreview",
    "technology",
    "theater",
    "t-magazine",
    "travel",
    "upshot",
    "us",
    "world",
  ];
  const list = document.querySelector(".news__category__all__list");
  categories.forEach(async (category) => {
    const LI = document.createElement('details')

    LI.innerHTML += `
    <summary class="category" style="display: flex; justify-content: space-between; align-items: center">
      <div style="display: flex">
        <span class="material-symbols-outlined">
        crop_square
        </span>

          <h2>${category}</h2>
      </div>
      <span class="material-symbols-outlined">
        chevron_right
        </span>
    </summary>

    ` 

    LI.addEventListener('click', async () => {
      const apiKey = "S9jcgNFQNpvpBKGockNgkBjQQRoMaYKi";
      const apiUrl = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${apiKey}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      data.results.forEach(res => {
        console.log(res)
        LI.innerHTML += `
          ${res.title}
          ${res.abstract}
          <img class="circleimg" src="${res.multimedia[0].url}">
        `
      })
    })

    list.append(LI)
  });
})();

// Function to fetch data from the API and update headlines and descriptions
async function updateHeadlinesAndDescriptions(category) {
  const apiKey = "S9jcgNFQNpvpBKGockNgkBjQQRoMaYKi";
  const apiUrl = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${apiKey}`;

  // Fetch data from the API
  const response = await fetch(apiUrl);
  const data = await response.json();

  // Loop through the articles and update headlines and descriptions

  // Update headline
  article.textContent = data.results[i]?.title || "No Title Available";

  // Update description
  data.results[i]?.abstract || "No Description Available";
}

// Call the function to update headlines and descriptions when the page loads
window.addEventListener("load", updateHeadlinesAndDescriptions);
})()