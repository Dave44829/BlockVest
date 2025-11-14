// Mobile menu - only run if elements exist
const mobileHamburgerBtn = document.querySelector("#mobileHamburgerBtn");
const mobileCancelBtn = document.querySelector("#mobileCancelBtn");
const mobileMenu = document.querySelector("#mobileMenu");
const hamburgerMenu = document.querySelector("#hamburgerMenu");

if (mobileHamburgerBtn && mobileCancelBtn && mobileMenu && hamburgerMenu) {
    mobileHamburgerBtn.addEventListener("click", function () {
        mobileMenu.style.display = "flex";
        hamburgerMenu.style.display = "none";
    });
    
    mobileCancelBtn.addEventListener("click", function () {
        mobileMenu.style.display = "";
        hamburgerMenu.style.display = "flex";
    });
}





// ABOUT US POPUPS
const popupButtons = document.querySelectorAll('.popup-trigger');

    popupButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            const popup = this.nextElementSibling;
            
            // Close all other popups
            document.querySelectorAll('.popup').forEach(p => {
                if (p !== popup) {
                    p.style.display = 'none';
                }
            });
            
            // Toggle this popup
            if (popup.style.display === 'none' || popup.style.display === '') {
                popup.style.display = 'block';
            } else {
                popup.style.display = 'none';
            }
        });
    });

    // Close popups when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.popup')) {
            document.querySelectorAll('.popup').forEach(popup => {
                popup.style.display = 'none';
            });
        }
    });

    // Prevent popup from closing when clicking inside it
    document.querySelectorAll('.popup').forEach(popup => {
        popup.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });






// FAQ 
    document.addEventListener('DOMContentLoaded', function() {
            const faqQuestions = document.querySelectorAll('.faq-question');
            
            faqQuestions.forEach(function(question) {
                question.addEventListener('click', function() {
                    const answer = question.nextElementSibling;
                    const icon = question.querySelector('svg');
                    
                    answer.classList.toggle('hidden');
                    icon.classList.toggle('rotate-180');
                });
            });
        });



        
      
    