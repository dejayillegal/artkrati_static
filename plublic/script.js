document.getElementById('year').textContent = new Date().getFullYear();
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(l => l.addEventListener('click', e => {
  const href = l.getAttribute('href');
  if (href.length > 1) {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}));
