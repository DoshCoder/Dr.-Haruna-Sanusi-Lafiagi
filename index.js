 // Mobile Navigation Toggle[citation:3]
        document.getElementById('menuToggle').addEventListener('click', function() {
            document.getElementById('mainNav').classList.toggle('active');
        });

        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    document.querySelectorAll('nav a').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    // Close mobile menu if open
                    document.getElementById('mainNav').classList.remove('active');
                }
            });
        });

        // Filterable Publications Table[citation:4]
        function filterPublications() {
            const input = document.getElementById('pubSearch');
            const filter = input.value.toUpperCase();
            const table = document.getElementById('publicationsTable');
            const tr = table.getElementsByTagName('tr');
            
            for (let i = 1; i < tr.length; i++) {
                const td1 = tr[i].getElementsByTagName('td')[0];
                const td2 = tr[i].getElementsByTagName('td')[1];
                const td3 = tr[i].getElementsByTagName('td')[2];
                
                if (td1 || td2 || td3) {
                    const txtValue1 = td1.textContent || td1.innerText;
                    const txtValue2 = td2.textContent || td2.innerText;
                    const txtValue3 = td3.textContent || td3.innerText;
                    
                    if (txtValue1.toUpperCase().indexOf(filter) > -1 || 
                        txtValue2.toUpperCase().indexOf(filter) > -1 || 
                        txtValue3.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = '';
                    } else {
                        tr[i].style.display = 'none';
                    }
                }
            }
        }
        
        document.getElementById('pubSearch').addEventListener('keyup', filterPublications);

        // Accordion Functionality for Teaching Section
        function toggleAccordion(header) {
            header.classList.toggle('active');
            const content = header.nextElementSibling;
            content.classList.toggle('open');
        }

        // Contact Form Submission
        document.getElementById('messageForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real implementation, this would connect to a backend
            // For now, we'll simulate submission and show a message
            alert(`Thank you, ${name}. Your message has been received. In a live implementation, this would be sent to Dr. Haruna's official email.`);
            
            // Reset form
            this.reset();
        });

        // Update active nav link on scroll
        window.addEventListener('scroll', function() {
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