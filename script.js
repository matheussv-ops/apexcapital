document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li a');

  function openMenu() {
    hamburger.classList.add('active');
    navLinks.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      if (hamburger.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // Close menu when a nav link is clicked
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (hamburger && hamburger.classList.contains('active')) {
        closeMenu();
      }
    });
  });

  // 2. Sticky Navbar on Scroll
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all items
      faqItems.forEach(other => other.classList.remove('active'));

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

});
