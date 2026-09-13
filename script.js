const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const discountButton = document.querySelector('[data-discount]');
const discountPopover = document.querySelector('[data-discount-popover]');

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

const navLinks = nav?.querySelectorAll('a[href^="#"]');

const setActiveNavLink = (hash) => {
  navLinks?.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === hash);
  });
};

setActiveNavLink(window.location.hash || '');

navLinks?.forEach((link) => {
  link.addEventListener('click', () => {
    setActiveNavLink(link.getAttribute('href'));
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('hashchange', () => {
  setActiveNavLink(window.location.hash || '');
});

discountButton?.addEventListener('click', () => {
  const isOpen = discountPopover.classList.toggle('open');
  discountButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();

const platformBookings = [
  { name: 'Viator', url: 'https://share.google/SydhwKdbGZxU2L885' },
  { name: 'GetYourGuide', url: 'https://share.google/iNXV8HnKpN4quWEX7' },
  { name: 'Tripadvisor', url: 'https://share.google/cpNZXwCXJ78SlOgdE' }
];

const bookingContact = document.querySelector('.booking-contact');
if (bookingContact) {
  const platformBooking = document.createElement('div');
  platformBooking.className = 'platform-booking';
  platformBooking.innerHTML = '<span class="platform-label">OR BOOK THROUGH YOUR PREFERRED PLATFORM</span>';

  const platformLinks = document.createElement('div');
  platformLinks.className = 'platform-links';
  platformBookings.forEach(({ name, url }) => {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.innerHTML = `${name} <span>↗</span>`;
    platformLinks.append(link);
  });

  platformBooking.append(platformLinks);
  bookingContact.before(platformBooking);
}
