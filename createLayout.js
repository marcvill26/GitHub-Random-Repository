
export function createLayout(languages) {
  const app = document.createElement('main');
  app.className = 'card';

  app.innerHTML = `
    <header class="header">
      <span class="logo"></span>
      <h1>GitHub Repository Finder</h1>
    </header>

    <select id="languageSelect" class="select">
      <option value="">Select a language</option>
      ${languages.map(l => `<option value="${l}">${l}</option>`).join('')}
    </select>

    <section id="state"></section>
    <section id="repository"></section>

    <button id="refreshBtn" class="hidden">Refresh</button>
  `;

  document.body.appendChild(app);
}
