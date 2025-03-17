const modeToggler = document.querySelectorAll('.change-mode');

// applTheme dynamically updates the web theme based on the value stored in browser's localStorage.
const applyTheme = (theme) => {
  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
    modeToggler.forEach((toggler) => {
      toggler.classList.add('dark-theme');
    });
  } else {
    document.body.classList.remove('dark-theme');
    modeToggler.forEach((toggler) => {
      toggler.classList.remove('dark-theme');
    });
  }
};

// toggleTheme interchanges the website's theme.
const toggleTheme = () => {
  const currentTheme = document.body.classList.contains('dark-theme')
    ? 'dark'
    : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
};

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

modeToggler.forEach((toggler) => {
  toggler.addEventListener('click', toggleTheme);
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-links .link');
navLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    navLinks.forEach((nav) => {
      nav.classList.remove('active');
    });

    // Add active class to clicked link.
    this.classList.add('active');

    // Store the active page in localStorage to maintain state across pages.
    const href = this.querySelector('a').getAttribute('href');
    localStorage.setItem('activePage', href);
  });
});

// Set active link based on current page.
const currentPage = window.location.pathname.split('/').pop();
console.log(currentPage);

const activePage = localStorage.getItem('activePage') || 'index.html';

// Highlight link based on the current page and value stored in local storage.
navLinks.forEach((link) => {
  const linkHref = link.querySelector('a').getAttribute('href');

  if (
    linkHref === currentPage ||
    (currentPage === '' && linkHref === 'index.html') ||
    linkHref === activePage
  ) {
    navLinks.forEach((nav) => nav.classList.remove('active'));
    link.classList.add('active');
  }
});

// Collapse hamburgerMenu if any link is clicked.
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
  });
});
