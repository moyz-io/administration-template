const path = window.location.href;
const links = document.querySelectorAll('#layoutSidenav_nav .sb-sidenav a.nav-link');
const sidebarToggler = document.querySelector('#sidebarToggle');
const body = document.querySelector('body');
const sidebarContent = document.querySelector('#layoutSidenav_content');

links.forEach((link) => {
    if (link.href === path) {
        link.classList.add('active');
    }
});

sidebarToggler.addEventListener('click', (event) => {
    event.preventDefault();
    body.classList.toggle('sb-sidenav-toggled');
});

sidebarContent.addEventListener('click', (event) => {
    if (window.innerWidth < 992) {
        body.classList.remove('sb-sidenav-toggled');
    }
});