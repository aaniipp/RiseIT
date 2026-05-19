
        // Page navigation with simple, clean transitions
        let currentPage = 'home';
        
        function showPage(pageId) {
            // Prevent clicking the same page
            if (currentPage === pageId) {
                return;
            }
            
            const currentPageElement = document.getElementById(currentPage);
            const nextPageElement = document.getElementById(pageId);
            
            // Ensure target page exists
            if (!nextPageElement) {
                return;
            }
            
            // Hide current page immediately
            if (currentPageElement) {
                currentPageElement.style.display = 'none';
                currentPageElement.classList.remove('active');
            }
            
            // Show new page immediately
            nextPageElement.style.display = 'block';
            nextPageElement.classList.add('active');
            
            // Handle Global Back Button
            let backBtn = document.getElementById('global-back-btn');
            if (!backBtn) {
                backBtn = document.createElement('button');
                backBtn.id = 'global-back-btn';
                backBtn.className = 'fixed top-24 left-4 md:left-8 z-40 btn-secondary py-2 px-4 text-sm flex items-center shadow-lg bg-[#240046]/80 backdrop-blur-md border border-white/20 hover:border-accent-yellow text-white transition-all';
                backBtn.innerHTML = '← Back to Home';
                backBtn.onclick = () => showPage('home');
                document.body.appendChild(backBtn);
            }
            
            if (pageId === 'home') {
                backBtn.style.display = 'none';
            } else {
                backBtn.style.display = 'flex';
            }
            
            // Update current page
            currentPage = pageId;
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Smooth scroll to section
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }

        // Show application forms
        function showMenteeApplication() {
            document.getElementById('menteeApplication').classList.remove('hidden');
            document.getElementById('associateApplication').classList.add('hidden');
            if(document.getElementById('mentorApplication')) document.getElementById('mentorApplication').classList.add('hidden');
            document.getElementById('menteeApplication').scrollIntoView({ behavior: 'smooth' });
        }

        function showAssociateApplication() {
            document.getElementById('associateApplication').classList.remove('hidden');
            document.getElementById('menteeApplication').classList.add('hidden');
            if(document.getElementById('mentorApplication')) document.getElementById('mentorApplication').classList.add('hidden');
            document.getElementById('associateApplication').scrollIntoView({ behavior: 'smooth' });
        }

        function showMentorApplication() {
            if(document.getElementById('mentorApplication')) document.getElementById('mentorApplication').classList.remove('hidden');
            document.getElementById('menteeApplication').classList.add('hidden');
            document.getElementById('associateApplication').classList.add('hidden');
            if(document.getElementById('mentorApplication')) document.getElementById('mentorApplication').scrollIntoView({ behavior: 'smooth' });
        }

        function showPartnershipForm() {
            document.getElementById('partnershipForm').classList.remove('hidden');
            document.getElementById('partnershipForm').scrollIntoView({ behavior: 'smooth' });
        }

        // RiseTalk registration functions
        const riseTalkEvents = {
            'intro-it-consulting': {
                title: 'Introduction to IT Consulting',
                speaker: 'John Doe - Senior Consultant at Tech Company',
                date: 'January 15, 2024',
                time: '19:00 - 20:30 WIB',
                description: 'Learn the fundamentals of IT consulting and career pathways in the industry.'
            },
            'digital-transformation': {
                title: 'Digital Transformation Strategies',
                speaker: 'Jane Smith - CTO at StartupXYZ',
                date: 'January 22, 2024',
                time: '19:00 - 20:30 WIB',
                description: 'Explore how companies are navigating digital transformation and the role of consultants.'
            }
        };

        function showRiseTalkRegistration(eventId) {
            const event = riseTalkEvents[eventId];
            const eventDetails = document.getElementById('eventDetails');
            const eventIdField = document.getElementById('riseTalkEventId');
            
            eventDetails.innerHTML = `
                <h4 class="text-xl font-bold text-accent-yellow mb-3">${event.title}</h4>
                <p class="text-gray-300 mb-2"><strong>Speaker:</strong> ${event.speaker}</p>
                <p class="text-gray-300 mb-2"><strong>Date:</strong> ${event.date}</p>
                <p class="text-gray-300 mb-2"><strong>Time:</strong> ${event.time}</p>
                <p class="text-gray-300">${event.description}</p>
            `;
            
            eventIdField.value = eventId;
            document.getElementById('riseTalkRegistration').classList.remove('hidden');
            document.getElementById('riseTalkRegistration').scrollIntoView({ behavior: 'smooth' });
        }

        function closeRiseTalkRegistration() {
            document.getElementById('riseTalkRegistration').classList.add('hidden');
            document.getElementById('riseTalkForm').reset();
        }

        // Enhanced input functions
        function clearInput(inputId) {
            document.getElementById(inputId).value = '';
            document.getElementById(inputId).focus();
        }

        function capitalizeInput(inputId) {
            const input = document.getElementById(inputId);
            const words = input.value.toLowerCase().split(' ');
            const capitalizedWords = words.map(word => {
                return word.charAt(0).toUpperCase() + word.slice(1);
            });
            input.value = capitalizedWords.join(' ');
        }

        function validateEmail(inputId) {
            const input = document.getElementById(inputId);
            const email = input.value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailRegex.test(email)) {
                input.style.borderColor = '#10b981';
                input.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
                setTimeout(() => {
                    input.style.borderColor = '';
                    input.style.boxShadow = '';
                }, 2000);
            } else {
                input.style.borderColor = '#ef4444';
                input.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                setTimeout(() => {
                    input.style.borderColor = '';
                    input.style.boxShadow = '';
                }, 2000);
            }
        }

        function formatPhone(inputId) {
            const input = document.getElementById(inputId);
            let phone = input.value.replace(/\D/g, '');
            
            if (phone.length > 0) {
                if (phone.length <= 3) {
                    phone = phone;
                } else if (phone.length <= 7) {
                    phone = phone.slice(0, 3) + '-' + phone.slice(3);
                } else {
                    phone = phone.slice(0, 3) + '-' + phone.slice(3, 7) + '-' + phone.slice(7, 11);
                }
            }
            
            input.value = phone;
        }

        function clearTextarea(textareaId) {
            document.getElementById(textareaId).value = '';
            document.getElementById(textareaId).focus();
            updateCharCount(textareaId);
        }

        function capitalizeTextarea(textareaId) {
            const textarea = document.getElementById(textareaId);
            const sentences = textarea.value.split('. ');
            const capitalizedSentences = sentences.map(sentence => {
                if (sentence.trim() === '') return sentence;
                return sentence.charAt(0).toUpperCase() + sentence.slice(1);
            });
            textarea.value = capitalizedSentences.join('. ');
            updateCharCount(textareaId);
        }

        function alignTextarea(textareaId, alignment) {
            const textarea = document.getElementById(textareaId);
            textarea.style.textAlign = alignment;
        }

        function updateCharCount(textareaId) {
            const textarea = document.getElementById(textareaId);
            const countElement = document.getElementById(textareaId + '-count');
            if (countElement) {
                const count = textarea.value.length;
                countElement.textContent = count;
                
                if (count > 500) {
                    countElement.style.color = '#ef4444';
                } else if (count > 400) {
                    countElement.style.color = '#f59e0b';
                } else {
                    countElement.style.color = '#9ca3af';
                }
            }
        }

        // Form submission handlers with API integration
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                const formData = new FormData(this);
                const submitButton = this.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                
                // Show loading state
                submitButton.textContent = 'Submitting...';
                submitButton.disabled = true;
                
                try {
                    let endpoint = '';
                    let data = {};
                    
                    // Determine which form is being submitted
                    if (this.id === 'riseTalkForm') {
                        endpoint = '/api/risetalk-registration';
                        data = {
                            eventId: document.getElementById('riseTalkEventId').value,
                            firstName: document.getElementById('riseTalkFirstName').value,
                            lastName: document.getElementById('riseTalkLastName').value,
                            email: document.getElementById('riseTalkEmail').value,
                            phone: document.getElementById('riseTalkPhone').value,
                            organization: document.getElementById('riseTalkOrganization').value,
                            motivation: document.getElementById('riseTalkMotivation').value
                        };
                    } else if (this.closest('#menteeApplication')) {
                        endpoint = '/api/mentee-application';
                        data = {
                            firstName: document.getElementById('firstName').value,
                            lastName: document.getElementById('lastName').value,
                            email: document.getElementById('email').value,
                            phone: document.getElementById('phone').value,
                            university: document.getElementById('university').value,
                            major: document.getElementById('major').value,
                            motivation: document.getElementById('motivation').value
                        };
                    } else if (this.closest('#associateApplication')) {
                        endpoint = '/api/associate-application';
                        data = {
                            firstName: document.getElementById('assocFirstName').value,
                            lastName: document.getElementById('assocLastName').value,
                            email: document.getElementById('assocEmail').value,
                            positionAppliedFor: document.getElementById('assocPosition').value,
                            motivation: document.getElementById('assocMotivation').value,
                            relevantExperience: document.getElementById('assocExperience').value
                        };
                    } else if (this.closest('#partnershipForm')) {
                        endpoint = '/api/partnership-inquiry';
                        data = {
                            organizationName: document.getElementById('orgName').value,
                            industry: document.getElementById('industry').value,
                            contactPerson: document.getElementById('contactPerson').value,
                            email: document.getElementById('partnerEmail').value,
                            partnershipType: document.getElementById('partnershipType').value,
                            proposal: document.getElementById('partnershipProposal').value
                        };
                    } else if (this.closest('#contact') && this.querySelector('#contactSubject')) {
                        endpoint = '/api/contact-message';
                        data = {
                            firstName: document.getElementById('contactFirstName').value,
                            lastName: document.getElementById('contactLastName').value,
                            email: document.getElementById('contactEmail').value,
                            subject: document.getElementById('contactSubject').value,
                            message: document.getElementById('contactMessage').value
                        };
                    }
                    
                    if (endpoint) {
                        // For demo purposes, we'll simulate API call
                        // In production, this would be: const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
                        
                        // Simulate API call delay
                        await new Promise(resolve => setTimeout(resolve, 1500));
                        
                        // Show success message
                        showNotification('success', 'Thank you for your submission! We will get back to you soon.');
                        
                        // Reset form
                        this.reset();
                        
                        // Reset character counts
                        this.querySelectorAll('[id$="-count"]').forEach(countElement => {
                            countElement.textContent = '0';
                            countElement.style.color = '#9ca3af';
                        });
                        
                        // Close RiseTalk registration if open
                        if (this.id === 'riseTalkForm') {
                            closeRiseTalkRegistration();
                        }
                    }
                    
                } catch (error) {
                    console.error('Form submission error:', error);
                    showNotification('error', 'An error occurred. Please try again later.');
                } finally {
                    // Reset button state
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }
            });
        });

        // Notification system
        function showNotification(type, message) {
            const notification = document.createElement('div');
            notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 ${
                type === 'success' ? 'bg-green-500' : 'bg-red-500'
            } text-white`;
            notification.innerHTML = `
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        ${type === 'success'
                            ? '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'
                            : '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'
                        }
                    </div>
                    <div class="ml-3">
                        <p class="text-sm font-medium">${message}</p>
                    </div>
                    <div class="ml-auto pl-3">
                        <button onclick="this.parentElement.parentElement.parentElement.remove()" class="text-white hover:text-gray-200">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Animate in
            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 100);
            
            // Auto remove after 5 seconds
            setTimeout(() => {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }, 5000);
        }

        // Add smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';

        // Add intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Initialize enhanced inputs and textareas
        document.addEventListener('DOMContentLoaded', () => {
            // Initialize home page
            const homePage = document.getElementById('home');
            if (homePage) {
                homePage.style.display = 'block';
                homePage.classList.add('active');
            }
            
            // Observe all cards for animation
            document.querySelectorAll('.card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'all 0.6s ease';
                observer.observe(card);
            });

            // Add character count listeners to textareas
            document.querySelectorAll('textarea[id]').forEach(textarea => {
                textarea.addEventListener('input', () => updateCharCount(textarea.id));
                updateCharCount(textarea.id);
            });

            // Add focus effects to enhanced inputs
            document.querySelectorAll('.enhanced-input, .enhanced-textarea, .enhanced-select').forEach(input => {
                input.addEventListener('focus', function() {
                    this.style.transform = 'scale(1.02)';
                    this.style.boxShadow = '0 0 0 3px rgba(237, 246, 125, 0.1)';
                });
                
                input.addEventListener('blur', function() {
                    this.style.transform = '';
                    this.style.boxShadow = '';
                });
            });
        });