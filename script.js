document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');
    const pages = document.querySelectorAll('.page');
    const programLinks = document.querySelectorAll('.program-link');

    // Function to show a specific page
    function showPage(targetPage) {
        pages.forEach(page => {
            if (`#${page.id}` === targetPage) {
                page.style.display = 'block'; // Show the selected page
            } else {
                page.style.display = 'none'; // Hide other pages
            }
        });
    }

    // Initially show the home page
    showPage('#home');

    // Event listener for menu clicks
    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const targetPage = item.getAttribute('href');
            showPage(targetPage); // Show the page based on the clicked link
            window.location.hash = targetPage; // Update the URL hash
        });
    });

    // Opening modals for courses
    programLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const courseId = this.getAttribute('data-course');
            const modal = document.getElementById(`program-modal-${courseId}`);
            modal.style.display = 'flex'; // Display the modal

            // Add class to prevent body scroll
            document.body.classList.add('modal-open');

            // Handle mobile-specific behavior
            if (window.innerWidth <= 768) {
                modal.classList.add('mobile-modal');
            } else {
                modal.classList.remove('mobile-modal');
            }
        });
    });

    // Closing modals
    window.closeModal = function (courseId) {
        const modal = document.getElementById(`program-modal-${courseId}`);
        modal.style.display = 'none';

        // Remove class to allow body scroll
        document.body.classList.remove('modal-open');
    };
});
