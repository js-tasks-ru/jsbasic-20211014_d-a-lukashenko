function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  button.onclick = function() {
    if (text.hasAttribute('hidden')) {
      text.removeAttribute('hidden');
      return;
    }
    text.setAttribute('hidden', true);
  };
}
