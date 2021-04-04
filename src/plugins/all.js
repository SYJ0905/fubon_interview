function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  console.log('scrollTop =>', scrollTop);
  if (scrollTop >= 200) {
    document.querySelector('.go_top').classList.add('d-flex');
  } else {
    document.querySelector('.go_top').classList.remove('d-flex');
  }
}

function go_top(e) {
  e.preventDefault();
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

document.querySelector('.go_top').addEventListener('click', go_top);
window.addEventListener('scroll', handleScroll);

