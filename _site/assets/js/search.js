// assets/js/search.js

const searchInput = document.getElementById('blog-search');
const resultsContainer = document.createElement('div');
resultsContainer.id = 'search-results-container';
resultsContainer.className = 'search-results-dropdown';

// Append the results container right after the search box for a dropdown effect
const searchBox = document.querySelector('.blog-search-box');
if (searchBox) {
    searchBox.parentNode.insertBefore(resultsContainer, searchBox.nextSibling);
}

let searchIndex, postData;

// 1. Fetch the JSON Index
fetch("{{ site.baseurl }}/search.json")
    .then(response => response.json())
    .then(data => {
        postData = data;

        // 2. Initialize Lunr Index
        searchIndex = lunr(function () {
            this.ref('url');
            this.field('title', { boost: 10 });
            this.field('category');
            this.field('content');

            postData.forEach(function (doc) {
                this.add(doc);
            }, this);
        });
        console.log("Search Index loaded.");
    })
    .catch(error => console.error('Error fetching search index:', error));


// 3. Handle Search Input
searchInput.addEventListener('keyup', function () {
    const query = searchInput.value;
    resultsContainer.innerHTML = '';

    if (query.length < 3) {
        return; // Only search for 3 or more characters
    }

    try {
        // Perform the search
        const results = searchIndex.search(query);

        if (results.length === 0) {
            resultsContainer.innerHTML = '<p class="no-results">No results found for "' + query + '".</p>';
            return;
        }

        // Map Lunr results (ref URL) to postData for actual content
        const searchResults = results.map(result => {
            return postData.find(post => post.url === result.ref);
        }).filter(Boolean); // Filter out any undefined results

        // Display results
        searchResults.forEach(post => {
            const resultItem = document.createElement('a');
            resultItem.href = post.url;
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <h4>${post.title}</h4>
                <p class="result-meta">
                    <span class="result-category">${post.category}</span>
                    <span class="result-date">${post.date}</span>
                </p>
            `;
            resultsContainer.appendChild(resultItem);
        });

    } catch (error) {
        // Handle errors like unclosed parentheses in search query
        console.error("Lunr search error:", error);
        resultsContainer.innerHTML = '<p class="error-results">Invalid search query.</p>';
    }
});