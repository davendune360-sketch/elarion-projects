// ===== ELARION PROJECTS - Interactive Scripts =====

// 1. Grab the form and the note element from the page
const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');

// 2. Listen for the form being submitted
form.addEventListener('submit', function (event) {

    // 3. Stop the page from reloading
    event.preventDefault();

    // 4. Read the values the user typed
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // 5. Basic validation: all fields must have content
    if (name === '' || email === '' || message === '') {
        note.textContent = 'Please fill in all fields before sending.';
        note.style.color = '#c2410c';   // warning colour
        return;                          // stop here
    }

    // 6. All good (for now) - show demo confirmation
    note.textContent =
        'Thanks, ' + name + '. This is a demonstration — no message was sent yet.';
    note.style.color = 'var(--slate)';

    // 7. Clear the form
    form.reset();
});

// ===== Mobile Navigation Toggle =====

const navToggle = document.getElementById('nav-toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', function () {
    nav.classList.toggle('nav-open');

    const isOpen = nav.classList.contains('nav-open');
    navToggle.setAttribute('aria-expanded', isOpen);
});

// Close the menu when a nav link is clicked
document.querySelectorAll('nav ul a').forEach(function (link) {
    link.addEventListener('click', function () {
        nav.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});