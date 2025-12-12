async function loadSearchIndex() {
  const response = await fetch('/search.json');
  return await response.json();
}

document.addEventListener('DOMContentLoaded', async () => {
  const posts = await loadSearchIndex();
  const input = document.getElementById('search-input');
  const resultsList = document.getElementById('results-list');

  input.addEventListener('keyup', () => {
    const query = input.value.toLowerCase();
    resultsList.innerHTML = '';

    if (query.length < 2) return;

    const results = posts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query)
    );

    results.forEach(post => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${post.url}">${post.title}</a>`;
      resultsList.appendChild(li);
    });
  });
});
