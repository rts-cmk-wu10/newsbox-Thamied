export default (function () {
    if (!window.location.pathname.includes("index.html")) return
 
    fetch("https://api.nytimes.com/svc/topstories/v2/health.json?api-key=GIh5HEZpHXp8aQ1fvIEAR0bKzwYPWvQa")
 
        .then(function (response) {
 
            if (response.status === 200) {
                return response.json()
 
            } else {
                const ERROR = document.querySelector(".categoryHealth__dropdown")
                ERROR.innerText = "ups, noget gik galt. Prøv igen senere"
 
            }
        })
 
        // Hent data
        .then(function (healthData) {
            const CATEGORY_DROP_DOWN = document.querySelector(".categoryHealth__dropdown")
 
            // Laver elementer for hver artikel
            healthData.results.forEach(function (healthArticles) {
                const ARTICLE = document.createElement("article")
                const IMG = (healthArticles.multimedia && healthArticles.multimedia[0].url) || ""
 
                ARTICLE.innerHTML = `
                    <img class="articleImg" src="${IMG}">
                    <div class="healthArticle__container">
                        <a class="healthHeading" href="${healthArticles.title}">${healthArticles.title}</a>
                        <p class="healthAbstract">${healthArticles.abstract}</p>
                    </div>
                    `
                CATEGORY_DROP_DOWN.append(ARTICLE)
            })
        })
 
        // click event
        const CATEGORY_CLICK = document.querySelector(".categoryHealth__click")
        CATEGORY_CLICK.addEventListener("click", clickHandler)
 
        // toggle hide & un-hide dropdown
        function clickHandler() {
            const CATEGORY_DROPDOWN = document.querySelector(".categoryHealth__dropdown")
            CATEGORY_DROPDOWN.classList.toggle("hidden")
        }
})()