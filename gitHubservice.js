
import { GITHUB_SEARCH_URL, HEADERS } from '../config/apiConfig.js';

export async function searchRepositories(language) {
  const url = new URL(GITHUB_SEARCH_URL);

  url.searchParams.set('q', `language:${language}`);
  url.searchParams.set('sort', 'stars');
  url.searchParams.set('order', 'desc');
  url.searchParams.set('per_page', '50');

  const response = await fetch(url.toString(), {
    headers: HEADERS
  });

  if (!response.ok) {
    throw new Error('Error fetching repositories');
  }

  const data = await response.json();
  return data.items;
}
