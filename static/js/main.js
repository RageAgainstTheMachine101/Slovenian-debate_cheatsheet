// Back to top button functionality
const backToTop = document.getElementById('backToTop');
const toast = document.getElementById('toast');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Copy button functionality
document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', async () => {
        const text = button.getAttribute('data-text');
        try {
            await navigator.clipboard.writeText(text);
            
            // Show copied state on button
            button.classList.add('copied');
            button.textContent = 'Copied!';
            
            // Show toast
            toast.classList.add('show');
            
            // Reset after 2 seconds
            setTimeout(() => {
                button.classList.remove('copied');
                button.textContent = 'Copy';
                toast.classList.remove('show');
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    });
});
