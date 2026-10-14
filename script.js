const root = document.documentElement;
const saved = localStorage.getItem('tema');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
root.dataset.theme = saved || (prefersDark ? 'dark' : 'light');

document.getElementById('theme').addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('tema', next);
});

document.getElementById('year').textContent = new Date().getFullYear();

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); }
}), { threshold: 0.1 });
document.querySelectorAll('section:not(.hero)').forEach(s => { s.classList.add('reveal'); io.observe(s); });
