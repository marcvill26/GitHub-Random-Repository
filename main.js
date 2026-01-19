
import { createLayout } from './ui/createLayout.js';
import { showEmpty, showLoading, showError, clearState } from './ui/renderState.js';
import { renderRepository } from './ui/renderRepo.js';
import { searchRepositories } from './services/gitHubservice.js';
import { getRandom } from './utils/random.js';

const LANGUAGES = [
  'JavaScript',
  'Python',
  'TypeScript',
  'Java',
  'Go',
  'PHP',
  'Ruby'
];

let cache = [];
let lastLanguage = null;

createLayout(LANGUAGES);

const select = document.getElementById('languageSelect');
const state = document.getElementById('state');
const repoContainer = document.getElementById('repository');
const refreshBtn = document.getElementById('refreshBtn');

showEmpty(state);

select.addEventListener('change', () => loadRepositories());

refreshBtn.addEventListener('click', () => {
  renderRepository(repoContainer, getRandom(cache));
});

async function loadRepositories() {
  const language = select.value;
  if (!language) return;

  lastLanguage = language;
  refreshBtn.classList.add('hidden');
  repoContainer.innerHTML = '';

  showLoading(state);

  try {
    cache = await searchRepositories(language);
    clearState(state);

    if (!cache.length) {
      showEmpty(state);
      return;
    }

    renderRepository(repoContainer, getRandom(cache));
    refreshBtn.classList.remove('hidden');

  } catch (error) {
    showError(state, loadRepositories);
  }
}

