// Toggle service details
function toggleDetails(button) {
    const details = button.nextElementSibling;
    if (details.style.display === 'none') {
        details.style.display = 'block';
        button.textContent = 'Show Less';
    } else {
        details.style.display = 'none';
        button.textContent = 'Learn More';
    }
}

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Simple validation
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                showMessage('Please fill in all fields', 'error');
                return;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Please enter a valid email', 'error');
                return;
            }
            
            // Show success message
            showMessage(`Thank you ${name}! We'll contact you soon at ${email}`, 'success');
            
            // Reset form
            contactForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
});

function showMessage(text, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = text;
    formMessage.className = type;
    formMessage.style.display = 'block';
}

// Add active class to current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'Index.html';
    const links = document.querySelectorAll('nav.navbar a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'Index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
