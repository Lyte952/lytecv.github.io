const nav = document.querySelector('nav');
  nav.addEventListener('click', function(event) {
    if (event.target.classList.contains('nav-button')) {
      const scrollTarget = event.target.dataset.scrollTarget;
      document.getElementsById(scrollTarget).scrollIntoView({ behavior: "smooth" });
    }
  })