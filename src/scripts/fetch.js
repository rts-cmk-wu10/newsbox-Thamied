// Function to fetch data from the API and update headlines and descriptions
async function updateHeadlinesAndDescriptions() {
    try {
        const apiKey = "S9jcgNFQNpvpBKGockNgkBjQQRoMaYKi";
        const apiUrl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;
       
        // Fetch data from the API
        const response = await fetch(apiUrl);
        const data = await response.json();
   
        // Check if data was fetched successfully
        if (response.ok && data.results) {
            // Loop through the articles and update headlines and descriptions
            const articles = document.querySelectorAll('.news__category__all__list .headline');
            const descriptions = document.querySelectorAll('.news__category__all__list .description');
           
            for (let i = 0; i < articles.length; i++) {
                const article = articles[i];
                const description = descriptions[i];
               
                // Update headline
                article.textContent = data.results[i]?.title || "No Title Available";
               
                // Update description
                description.textContent = data.results[i]?.abstract || "No Description Available";
            }
        } else {
            console.error("Error fetching data from API");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
  }
   
  // Call the function to update headlines and descriptions when the page loads
  window.addEventListener('load', updateHeadlinesAndDescriptions);
   
   
  export default (function () {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=S9jcgNFQNpvpBKGockNgkBjQQRoMaYKi')
      .then(response => response.json())
      .then(data => {
   
        console.log(data);
   
      });
  })()