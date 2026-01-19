
export function renderRepository(container, repo) {
  container.innerHTML = `
    <article class="repo">
      <h2>${repo.name}</h2>
      <p>${repo.description || 'No description available.'}</p>

      <div class="meta">
        <span>⭐ ${repo.stargazers_count}</span>
        <span>🍴 ${repo.forks_count}</span>
        <span>🐞 ${repo.open_issues_count}</span>
      </div>

      ${repo.html_url} target="_blank">View on GitHub</a>
    </article>
  `;
}
