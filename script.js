// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Scroll smoothly to the target section
            window.scrollTo({
                behavior: 'smooth',
                top: targetElement.offsetTop - 50, // Adjust the offset as needed
            });
        }
    });
});
