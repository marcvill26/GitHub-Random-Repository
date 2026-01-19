
export function showEmpty(container) {
  container.className = 'state empty';
  container.textContent = 'Please select a language';
}

export function showLoading(container) {
  container.className = 'state loading';
  container.textContent = 'Loading, please wait...';
}

export function showError(container, retryCb) {
  container.className = 'state error';

  container.innerHTML = `
    <p>Error fetching repositories</p>
    <button id="retryBtn">Click to retry</button>
  `;

  container
    .querySelector('#retryBtn')
    .addEventListener('click', retryCb);
}

export function clearState(container) {
  container.className = '';
  container.innerHTML = '';
}
