document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        const answer = item.nextElementSibling;
        const isOpen = parent.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('open'));
        document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
        if (!isOpen) {
            parent.classList.add('open');
            answer.style.display = 'block';
        }
    });
});

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
};


const goTopBtn = document.getElementById('goTopBtn');

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopBtn.style.display = "block";
    } else {
        goTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Add event listener to the button
goTopBtn.addEventListener("click", scrollToTop);


// <----------- Scroll Top Button Ends ------->