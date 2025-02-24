// Tab Switching Functionality
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));

    // Remove active class from all tabs and contents
    tabLinks.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to the clicked tab and corresponding content
    link.classList.add('active');
    target.classList.add('active');
  });
});

// RSVP Button Alert
const rsvpButton = document.querySelector('.rsvp-button');
rsvpButton.addEventListener('click', () => {
  alert('Thank you for your RSVP! We will contact you soon.');
});