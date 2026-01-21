// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.innerHTML = mainNav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking on a link
    document.querySelectorAll('#mainNav a').forEach(anchor => {
        anchor.addEventListener('click', () => {
            mainNav.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            // Update active navigation
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
            
            // Scroll to target
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Accordion functionality
function toggleAccordion(header) {
    const item = header.parentElement;
    const content = item.querySelector('.accordion-content');
    const icon = header.querySelector('i');
    
    // Close other accordion items
    document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.querySelector('.accordion-content').classList.remove('open');
            otherItem.querySelector('.accordion-header').classList.remove('active');
        }
    });
    
    // Toggle current item
    content.classList.toggle('open');
    header.classList.toggle('active');
    
    // Update icon
    if (content.classList.contains('open')) {
        icon.style.transform = 'rotate(180deg)';
    } else {
        icon.style.transform = 'rotate(0deg)';
    }
}

// Publication search functionality
const pubSearch = document.getElementById('pubSearch');
const pubTable = document.getElementById('publicationsTable');

if (pubSearch && pubTable) {
    pubSearch.addEventListener('input', function() {
        const filter = this.value.toLowerCase();
        const rows = pubTable.getElementsByTagName('tr');
        
        for (let i = 1; i < rows.length; i++) { // Start from 1 to skip header
            const cells = rows[i].getElementsByTagName('td');
            let found = false;
            
            for (let j = 0; j < cells.length; j++) {
                if (cells[j].textContent.toLowerCase().includes(filter)) {
                    found = true;
                    break;
                }
            }
            
            rows[i].style.display = found ? '' : 'none';
        }
    });
}

// Contact form submission
const messageForm = document.getElementById('messageForm');
if (messageForm) {
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! Dr. Haruna will respond to your inquiry soon.');
        
        // Reset form
        messageForm.reset();
    });
}

// Highlight active section on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});